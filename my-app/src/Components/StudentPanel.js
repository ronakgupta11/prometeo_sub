import StudentProfile from "./StudentProfile";
export default function StudentPanel(props){
    const address = props.address;
    
    
    const data = props.data.filter(obj => obj.studentAdd.toLowerCase() === address.toLowerCase())
    // console.log(typeof(address))
    // console.log((data[0].studentAdd === address.toLowerCase()))
    console.log(data)
    // console.log(address)
    const productsData = props.productsData;
    const transactionData = props.transactions.filter(obj => obj.sender === address)
    const allTransactions = transactionData.map((tr,i) => {
        return(
            <h6 key = {i}>{`${tr.id}: ${tr.amount} sent to ${tr.reciever} with ${tr.transactionHash} txn hash`}</h6>
            
        )
    })
    let name ="";
    let image ="";
    let balance = props.balance;
    if(data[0]){
        name = data[0].name;
        image = data[0].image;
        balance = data[0].balance
    }
    return(

        <div className="student-panel-main">
            <StudentProfile  getSigner = {props.getSigner} loading = {props.loading} setLoading = {props.setLoading} name = {name} image = {image} balance = {balance} data = {productsData}/>
            <div className="tr">

            <h3>Activity:</h3>
            {allTransactions}
            </div>
            {/* <h6>{`1 : 50 IIIJT sent to 0x294d985B6BC5dA375b571B5fDE228334343f4EdF with 0x294d985B6BC5dA375b571B5fDE228334343f4EdF txn hash`}</h6> */}

            
            
        </div>
    );

}