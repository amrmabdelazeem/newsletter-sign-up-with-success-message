import React from "react";
import Updates from "./Updates";
import Submit from "./Submit";

function Body(){
    return <div className="body">
        <h1>Stay updated!</h1>
        <Updates img="../../images/icon-list.svg"/>
        <Submit/>
    </div>
}

export default Body;