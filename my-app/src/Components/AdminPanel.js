import { useState } from "react";
import MerchSection from "./MerchSection";
import { BigNumber } from "ethers";
import { ethers } from "ethers";
import {abi,contractAddress} from "../constants/index"
export default function AdminPanel(props){
    const data = props.data;
    const studentData = props.students;
    const[inMerchTab,setInMerchTab] = useState(false);
    function handleClickMerch(){
        setInMerchTab(true);
    }
    const [reciever,setReciever] = useState("");
const [amount,setAmount] = useState(BigNumber.from("0"));
const send = async () => {
    try {

        props.setLoading(true);
      // Get the signer from web3Modal, which in our case is MetaMask
      // No need for the Signer here, as we are only reading state from the blockchain
      const signer = await props.getSigner(true);

      // We connect to the Contract using a signer because we want the owner to
      // sign the transaction
      const contract = new ethers.Contract(
        contractAddress,
        abi,
        signer
      );
    //   setLoading(true);
      // call the startGame function from the contract
      const tx = await contract.sendTokenToAddress(reciever,amount);
      await tx.wait();
      props.setLoading(false);
    } catch (err) {
      console.error(err);
      props.setLoading(false);
    }
  };


function handleReciever(e){
    setReciever(e.target.value);

}
function handleAmount(e){
    setAmount(BigNumber.from(e.target.value));
    
}

    const allStudents = studentData.map((st,i) => {
        return(
            <h4 key = {i}>{`${i+1}:       ${st.name}        ${st.studentId}         ${st.studentAdd}       ${st.batch}`}</h4>
            
        )
    })


    return(
        <div className="admin-panel-main">

        {inMerchTab && <MerchSection data = {data} loading = {props.loading} setLoading = {props.setLoading} getSigner = {props.getSigner}/> }
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
            {/* <button className="button button-1">Batch 1</button>
            <button className="button button-2">Batch 2</button>
            <button className="button button-3">Batch 3</button>
            <button className="button button-4">Batch 4</button> */}
            <button className="button button-1">All Students</button>
            <button className="button button-3">verified</button>
            <button className="button button-4">Not verified</button>
        </div>
        <div>

<input onChange={handleReciever} className="input-area" placeholder="enter student wallet address"></input>
<input onChange={handleAmount} className="input-area" placeholder="enter amount"></input>
<button onClick={send} className="btn send-token">{props.loading?"loading":"Send Token"}</button>
</div>


        
        <h3>
            ALL STUDENTS
        </h3>
        {allStudents}

    </div>
            
        </div>}
        </div>

        
    );

}