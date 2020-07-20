import React, {useState, useEffect} from "react";

const useWS = () => {

    // ws : websocket, rs : readyState
    const [ws, setWs] = useState<WebSocket|null>(null);
    const [rs, setRs] = useState<number>(0);
    
    const configureWebsocket = async() => {
        ws!.onopen = function(openEvent) {
            console.log("Websocket opened!!");
            ws!.onclose = function(close_event) {
				console.log(close_event);
			}
			ws!.onerror = function(error_event) {
				console.log(error_event);
			}
        }
    } 
    const heartbeat = async (ws : WebSocket) => { 		
		setTimeout(()=> {
            if(rs !== ws.readyState){
                setRs(ws.readyState)
            }
        },1000);
    }
    

    useEffect(() => {
        console.log("test");
		if(ws === null) { console.log("configure start"); setWs(new WebSocket('wss://127.0.0.1:1200',["master"]));   }
		if(ws !== null && rs === 0 ) { console.log("heartbeat start"); configureWebsocket(); heartbeat(ws); }		
    },[ws, rs]);
    
    return {
        ws, setWs
    }
}

export default useWS;