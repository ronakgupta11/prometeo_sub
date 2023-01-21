
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
import NotStudentTab from "./Components/NotStudentTab"
import { FETCH_CREATED_PRODUCT, FETCH_CREATED_STUDENT, FETCH_TRANSACTIONS } from './queries/index';
import { subgraphQuery } from './utils/index';


function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [loading,setLoading] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const [isStudent,setIsStudent] = useState(true);
  const [regStudent,setRegStudent] = useState(true);
  const [data,setData] = useState([]);
  const [productsData,setProductsData] = useState([]);
  const [transactions,setTransactions] = useState([]);
  const [admin,setAdmin] = useState("");


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
    setWalletConnected(true);
    setAddress(add);

    const contract =  new ethers.Contract(
      contractAddress,
      abi,
      signer
      );

    const owner = await contract.owner();

    // console.log("connected");
    // console.log(owner);

    // console.log(add);


    if(add === owner){
      setRegStudent(false);
      setIsStudent(false);
      setIsAdmin(true);

      
    }
    else{
    const data =  await contract.getData(add)
    if (data.name){
      setRegStudent(true);
      setIsStudent(true);
      console.log(data)
      setData(data)
      setAdmin(false)


    }
    else{
      setRegStudent(false);
      setIsStudent(true);
      setAdmin(false);

    }
  }

    }

    async function disconnect(){
      await web3Modal.clearCachedProvider();

      setWalletConnected(false);
      // renderButton();
      setAddress("");
      setRegStudent(false);
      setIsStudent(true);
      setIsAdmin(false);

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response1 = await subgraphQuery(FETCH_CREATED_PRODUCT());
        const response2 = await subgraphQuery(FETCH_CREATED_STUDENT());
        const response3 = await subgraphQuery(FETCH_TRANSACTIONS());

        setProductsData(response1.productCreateds);
        setData(response2.studentCreateds);
        setTransactions(response3.tokenTransfers);
        console.log(response1,response2,response3)
      } catch (err) {
        // setError(err);
        console.log(err)
      }
    };
    //fetch data on every 5 seconds
    // console.log(FETCH_CREATED_PRODUCT());
    const interval = setInterval(fetchData, 500);
    return () => clearInterval(interval);
  }, [data,productsData,transactions]);

  return (
    <div className="App">
      <Header connect = {connectWallet} disconnect = {disconnect} walletStatus = {walletConnected} />
      {!walletConnected && <Entry/>}
      {walletConnected && isAdmin && <AdminPanel data = {productsData}/>}
      {walletConnected && isStudent && !regStudent && <NotStudentTab loading = {loading} setLoading = {setLoading} getSigner = {getProviderOrSigner}/>}
      {walletConnected && isStudent && regStudent && <StudentPanel address = {address} productsData= {productsData} data = {data} transactions = {transactions}/>}
{/* <AdminPanel/> */}
{/* <StudentPanel/> */}
      <Footer />

    </div>
  );
}

export default App;
