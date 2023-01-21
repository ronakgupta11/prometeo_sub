export default function ProductCard(props){
    return(
        <div class="inside-main">
        <img src={props.image} alt=""></img>
        <h3>{props.name}</h3>
        <h3>{`Price : ${props.price} IITJT`}</h3>
        <button class="buy-btn">Buy</button>
    </div>
    );

}