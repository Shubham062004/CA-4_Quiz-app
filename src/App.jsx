import React,{useState,useEffect}  from "react";

// import questions from "./questions";

import QuestionBox from "./components/QuestionBox";



function App() {



  const [theme, setTheme] = useState(true)
  const [themeName, setThemeName] = useState("Dark")

  const handleToggle = ()=>{
    setTheme(theme?false:true);
  }

  function backGroundColors(color){

    document.body.style.backgroundColor = color? "#444542":"#b8ccbb";
    return{
      backgroundColor : color? "#444542":"#b8ccbb",
    }
  }

  function textColor(color){
    return{
      color:color?"white":"red",
    }
  }

  useEffect(()=>{
    setThemeName(themeName==="Light"?"Dark":"Light")
  },[theme])


  return (
    <div className="top-container">
      <div className="body App" style={backGroundColors(theme)}>


<div className="header">
<h2 style={textColor(theme)}>Made with 💗 by Kalvian</h2>
<div className="btn toggle-button" onClick={handleToggle}>{themeName}</div>
</div>
</div>
        <QuestionBox/>

        </div>


  );
}

export default App;