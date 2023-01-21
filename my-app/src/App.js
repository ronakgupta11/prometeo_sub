
import './App.css';
import {ethers} from "ethers";
import Web3Modal from "web3modal";
import { useEffect, useState } from 'react';
import {abi,contractAddress} from "./constants/index"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Entry from './Components/Entry';
import AdminPanel from './Components/AdminPanel';
import StudentPanel from './Components/StudentPanel';


function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [loading,setLoading] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const [isStudent,setIsStudent] = useState(true);

  const web3Modal = new Web3Modal({
    network: "mumbai",
    providerOptions : {},
    disableInjectedProvider: false,
  });
  
  const getProviderOrSigner = async(needSigner = false) => {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    if(needSigner){
      const signer = provider.getSigner();
      return signer;

    }
    return provider;
  }
  async function connectWallet(){
    const signer = await getProviderOrSigner(true);
    const add = await signer.getAddress()
    setAddress(add);
    setWalletConnected(true);
    }

    async function disconnect(){
      await web3Modal.clearCachedProvider();

      setWalletConnected(false);
      // renderButton();
      setAddress("");
  }

  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <Header connect = {connectWallet} disconnect = {disconnect} walletStatus = {walletConnected} />
      {!walletConnected && <Entry/>}
      {walletConnected && isAdmin && <AdminPanel/>}
      {walletConnected && isStudent && <StudentPanel/>}
      <Footer />

    </div>
  );
}

export default App;
