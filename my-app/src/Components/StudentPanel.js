import StudentProfile from "./StudentProfile";
export default function StudentPanel(props){
    // const data = props.data
    // const transactionData = props.transactions
    // const allTransactions = transactionData.map((tr,i) => {
    //     return(
    //         // <list from/>
    //     )
    // })
    return(

        <div className="student-panel-main">
            <StudentProfile name = {data.name} image = {data.image} balance = {data.balance} />
            <h3>Activity:</h3>
            {/* {allTransactions} */}
            
            
        </div>
    );

}