import MerchSection from "./MerchSection";
import { useState } from "react";
import { BigNumber, ethers } from "ethers";
import {abi,contractAddress} from "../constants/index"
export default function StudentProfile(props){
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
                <span className="profile-name">{props.name}</span>
            </div>
        </div>
        </div>

        <div className="middle-container">
            <h2>Balance <span className="balance">{props.balance}</span></h2>
            <div>

                <input onChange={handleReciever} className="input-area" placeholder="enter wallet address"></input>
                <input onChange={handleAmount} className="input-area" placeholder="enter amount"></input>
            </div>

                <button onClick={send} className="btn send-token">{props.loading?"loading":"Send Token"}</button>
    
                <button onClick = {handleClickMerch} className="btn spend-token">Spend Token</button>
            
            
        </div>
    </div>}
    </div>

    )
}