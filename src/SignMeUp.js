import React, {useState} from "react";

const [email, setEmail] = useState("")

const SignMeUp = ( signupCallBack ) => {
    return ( 
        <div className="container">
            <div>
                <div className="content">
                    <input placeholder="Enter Email" type="email" name="email" value={email} 
                        onChange={ (e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    &nbsp;
                    <button 
                        disabled = {!email.includes("@")}
                        onClick={() => {
                            signupCallBack(email);
                            setEmail("");
                            alert("signup confirmed")
                        }}
                        className="btn" type="submit"> Get Updates</button>
                </div>
            </div>

        </div> 
    );
}
 
export default SignMeUp;