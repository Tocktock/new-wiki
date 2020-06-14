import React, {useState, useEffect, Component} from "react";
import ReactDOM from "react-dom"

class App extends Component {
    render(){
        return <h1>helloWorld </h1>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))


export default App;