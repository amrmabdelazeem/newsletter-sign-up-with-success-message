import React from "react";

function Submit(){
    return <div className="email-input">
        <label>Email address</label>
        <input type="email" placeholder="email@company.com"/>
        <button>Subscribe to monthly newsletter</button>
    </div>
}

export default Submit;