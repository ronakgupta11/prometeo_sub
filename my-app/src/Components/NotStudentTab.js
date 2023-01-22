import { BigNumber } from "ethers";
import { useState } from "react";
import { ethers } from "ethers";
import {abi,contractAddress} from "../constants/index.js"

export default function NotStudentTab(props){



    // const zero = BigNumber.from("0"); 
    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [studentId,setStudentId] = useState("");
    const [batch,setBatch] = useState(0);


    function handleImage(e){
        setImage(e.target.value);

    }
    function handleName(e){
        setName(e.target.value);

    }
    function handleStudentId(e){
        setStudentId(e.target.value);

    }
    function handleBatch(e){
        setBatch(BigNumber.from(e.target.value));

    }

    
    const upload = async () => {
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
          const tx = await contract.createStudent(image,studentId,name,batch);
          await tx.wait();
          props.setLoading(false);
        } catch (err) {
          console.error(err);
          props.setLoading(false);
        }
      };
    return(
        <div className="NotStudentTab-div">
                    <div >
                        <input onChange={handleImage} className="input-area" type="text" id="product-image" placeholder="Enter image Url"></input>
                    </div>
                    <div>
                        <input onChange={handleStudentId} className="input-area" type="text" id="product-category" placeholder="Enter Student Id"></input>
                    </div>
                    <div>
                        <input onChange={handleName} className="input-area" type="text" id="product-name" placeholder="Enter Name"></input>
                    </div>
                    <div>
                        <input onChange={handleBatch} className="input-area" type="text" id="product-category" placeholder="Enter Batch"></input>
                    </div>
                    
                    <button onClick={() => upload()} className="upload-btn">{props.loading?"loading...":"Upload Details"}</button>
                

                    

            
        </div>
    );
}