import StudentProfile from "./StudentProfile";
export default function StudentPanel(props){
    const address = props.address;
    
    
    const data = props.data.filter(obj => obj.studentAdd === address )
    const productsData = props.productsData;
    const transactionData = props.transactions.filter(obj => obj.sender === address)
    const allTransactions = transactionData.map((tr,i) => {
        return(
            <h6 key = {i}>{`${tr.id}: ${tr.amount} sent to ${tr.reciever} with ${tr.transactionHash} txn hash`}</h6>
            
        )
    })
    return(

        <div className="student-panel-main">
            <StudentProfile name = {data.name} image = {data.image} balance = {data.balance} data = {productsData}/>
            <h3>Activity:</h3>
            {allTransactions}
            
            
        </div>
    );

}