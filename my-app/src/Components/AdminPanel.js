import { useState } from "react";
import MerchSection from "./MerchSection";

export default function AdminPanel(props){
    const data = props.data;
    const[inMerchTab,setInMerchTab] = useState(false);
    function handleClickMerch(){
        setInMerchTab(true);
    }

    return(
        <div className="admin-panel-main">

        {inMerchTab && <MerchSection data = {data}/> }
        {!inMerchTab && <div className="admin-panel-m">

            <div className="container">
        <div className="admin-btn">
        <div className="btn-container">
            <button onClick={handleClickMerch} className="add-merchant-btn">Add Merchandise</button>
            <button className="transition-btn">Transfer Ownership</button>
        </div>
    </div>
    </div>

      
    <div className="middle-container">
        <div className="buttons-container">
            <button className="button button-1">Batch 1</button>
            <button className="button button-2">Batch 2</button>
            <button className="button button-3">Batch 3</button>
            <button className="button button-4">Batch 4</button>
            <button className="button button-5">Not verified</button>
        </div>

        <div className="table-section">
            <table>
            <thead>
            <tr>
                <th>Sr.</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Send Token</th>
            </tr>
            </thead>
            <tbody>

            <tr>
                <td>Value 1</td>
                <td>Value 2</td>
                <td>Value 3</td>
                <td>
                    <button className="send-token-btn">Send Token</button>
                </td>
            </tr>
            <tr>
                <td>Value 5</td>
                <td>Value 6</td>
                <td>Value 7</td>
                <td>
                    <button className="send-token-btn">Send Token</button>
                </td>
            </tr>

            
            </tbody>
        </table>
        </div>

    </div>
            
        </div>}
        </div>

        
    );

}