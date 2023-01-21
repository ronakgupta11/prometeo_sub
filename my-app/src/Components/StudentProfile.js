import MerchSection from "./MerchSection";
import { useState } from "react";
export default function StudentProfile(props){
    const data = props.data;
    const[inMerchTab,setInMerchTab] = useState(false);
    function handleClickMerch(){
        setInMerchTab(true);
    }
    return(
    <div>
        {inMerchTab && <MerchSection data = {data}/> }

    {!inMerchTab && <div className="profile-section">
                <div className="profile-container">
            <div className="profile">
            <div className="profile-info">
                <img src={props.image} alt="Profile Photo"></img>
                <span className="profile-name">{}props.name</span>
            </div>
        </div>
        </div>

        <div className="middle-container">
            <h2>Balance <span className="balance">{props.balance}</span></h2>

                <button className="btn send-token">Send Token</button>
    
                <button onClick = {handleClickMerch} className="btn spend-token">Spend Token</button>
            
            
        </div>
    </div>}
    </div>

    )
}