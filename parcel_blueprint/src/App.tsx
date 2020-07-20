import './assets/main.css'
import React, {useState, useEffect, useContext} from 'react'
import ReactDom from 'react-dom'
import Navbar from "./Component/Navbar"
import Search from './Component/Search'
import LeftSide from './Component/LeftSide'
import Center from './Component/Center'
import RightSide from './Component/RightSide'
import Footer from './Component/Footer'




interface Props {
  message? : string
  user? : string
}

// const App:React.FC<Props> = (props) => {

//   return (
//     <>
//     <Navbar/> 
//     <Search/>
//     <LeftSide/>
//     <Center/>
//     <RightSide/>
//     <Footer/>
//     </>
//   );
// }

function App() {
  return (
      
    <div className="">
      <img className="" src={require('./profile.jpg')} alt="Display" />
      <div className="">
        <div className="">
          Blessing Krofegha
        </div>
        <p className="">
          When i’m not coding i switch to netflix with biscuits and cold tea as my companion. <span></span>😜
        </p>
      </div>
      <div className="">
        <span className="">#Software Engineer</span>
        <span className="">#Writter</span>
        <span className="">#Public Speaker</span>
      </div>
    </div>
  );
}
export default App;
ReactDom.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>, document.querySelector("#root")
)