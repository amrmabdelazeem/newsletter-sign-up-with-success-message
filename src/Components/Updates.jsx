import React from "react";

function Updates(props){
    return <div className="">
        <p className="below-header">Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="update">
            <img src={props.img} alt="mini-check"/>
            <p>Product discovery and building what matters</p>
            <img src={props.img} alt="mini-check"/>
            <p>Measuring to ensure updates are a success</p>
            <img src={props.img} alt="mini-check"/>
            <p>And much more!</p>
        </div>
    </div>
        
        
    
}

export default Updates;