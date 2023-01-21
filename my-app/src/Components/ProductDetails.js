
import { BigNumber } from "ethers";
import { useState } from "react";
import { ethers } from "ethers";

import {abi,contractAddress} from "../constants/index.js"
export default function ProductDetails(props){



    
  const zero = BigNumber.from("0");
    const [imageUrl,setImageUrl] = useState("");
    const [name,setName] = useState("");
    
    const [price,setPrice] = useState(zero);
    





    function handleImage(e){
        setImageUrl(e.target.value);

    }
    function handleName(e){
        setName(e.target.value);

    }

    function handlePrice(e){
        console.log(e.target.value)
        setPrice(e.target.value);

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
          const tx = await contract.listProduct(imageUrl,name,price);
          await tx.wait();
          props.setLoading(false);
        } catch (err) {
          console.error(err);
          props.setLoading(false);
        }
      };
    

    return(
    
        <div className="product-form">
             
                    <div >
                        <input onChange={handleImage} className="input-area" type="text" id="product-image" placeholder="Enter image Url"></input>
                    </div>
                    <div>
                        <input onChange={handleName} className="input-area" type="text" id="product-name" placeholder="Enter Product Name"></input>
                    </div>

                    <div >
                        <input onChange={handlePrice} className="input-area price-input" type="text" id="product-category" placeholder="Enter Price"></input>
                    </div>

                    
             
                    <div >
                        <button onClick={() => upload()} className="upload-btn">{props.loading?"loading...":"Upload Product"}</button>
                    </div>
        </div>   


    );

}