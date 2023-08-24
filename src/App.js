import React from "react";
import Home from "./Home";

const App = ({pageName}) => {
    if (pageName === 'Home') return <Home></Home>
    if (pageName === 'Speakers') return <></>
    return <div>Not found</div>
}
 
export default App;