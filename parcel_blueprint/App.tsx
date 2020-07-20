import React, {useState, useEffect, useContext} from 'react'
import ReactDom from 'react-dom'
interface Props {
  message : string
  user : string
}

const App:React.FC<Props> = (props) => {
  return <div>{props.message} {props.user} Hello World</div>
} 

ReactDom.render(
  <React.StrictMode>
    <App message="hello Wolrd" user="Jiyoung"/>
  </React.StrictMode>, document.querySelector("#root")
)