export default function Header(props){
    return(
        <div className = "header">
            <nav>
            <div className="left-side">
                <h2>Campus Coin</h2>
            </div>
            <div className="right-side">
                <button onClick= {props.walletStatus?() => props.disconnect():() => props.connect()} className="add-merchant-btn">{props.walletStatus?"disconnect":"Connect Wallet"}</button>
            </div>
        </nav>

        </div>
    )
}