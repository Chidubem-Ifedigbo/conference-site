import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
    if (pageName === 'Home') return <Home></Home>
    if (pageName === 'speakers') return <Speakers></Speakers>
    return <div>Not found</div>
}

const configValue = {
    showSpeakerSpeakingDays : true,
    showSignMeUp: false
}

const App = ({pageName}) => {
    return(

        <ConfigContext.Provider value = {configValue}>
        <div> {pageToShow(pageName)} </div>
        </ConfigContext.Provider>    
    );
}
 
export default App;