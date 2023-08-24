import React from "react";
import {Header} from "./Header";
import {Menu} from "./Menu"

const Home = () => {
    return ( <div>
        <Header />
        <Menu />
        <div className="container">
            <div className="row">
                <div className="col margintopbottom">
                    <h2>Home</h2>
                    <h6 className="margintopbottom28" >
                        Code camp is acommunity event where developers learn from fellow developers
                        We also have developer related topics that include
                        software branding, legal issues around softwares as well as other 
                        topics developers are interested in hearing about.
                    </h6>
                </div>  
            </div>
        </div>
        
        
    </div> );
}
 
export default Home;