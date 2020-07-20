package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

type msg struct {
	Jwt  string `json:"jwt"`
	Type string `json:"type"`
	Data string `json:"data"`
}

func handleAPI(w http.ResponseWriter, r *http.Request) {

	upgrader.CheckOrigin = func(r *http.Request) bool { return true }

	// connection
	con, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err.Error())
		return
	}
Loop:
	for {
		in := msg{}
		err := con.ReadJSON(&in)
		if err != nil {
			fmt.Println("Error reading json.", err)
			con.Close()
			break Loop
		}
		switch in.Type {
		case "for-test":
			fmt.Println("Test success!!")
			break
		default:
			fmt.Println(in)
			break
		}

	}
}

func main() {
	r := gin.Default()

	v1 := r.Group("/api")
	{
		v1.GET("/", func(c *gin.Context) {
			handleAPI(c.Writer, c.Request)
		})

		v1.GET("/pong", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"message": "pong",
			})
		})
	}

	r.Run(":1200") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
