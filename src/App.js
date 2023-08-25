import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

export const ConfigContext = React.createContext();

const App = ({pageName}) => {
    if (pageName === 'Home') return <Home></Home>
    if (pageName === 'speakers') return <Speakers></Speakers>
    return <div>Not found</div>
}
 
export default App;