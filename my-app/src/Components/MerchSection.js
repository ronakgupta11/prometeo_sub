import { useState } from "react"
import ProductCard from "./ProductCard"
import ProductDetails from "./ProductDetails"

export default function MerchSection(props){

    const data = props.data;
    const [inProductDetailTab,setInProductDetailTab] = useState(false);

    const allProducts = data.map((oneP,i) =>{
        return(
            <ProductCard key = {i} image = {oneP.imageUrl} name = {oneP.name} price = {oneP.price}/>
        )
    })
    function handleAddProduct(){
        setInProductDetailTab(true)

    }
    return(
        <div>
            {inProductDetailTab && <ProductDetails loading = {props.loading} setLoading = {props.setLoading} getSigner = {props.getSigner}/>}

        {!inProductDetailTab && <div className="cards-section">
            <button onClick = {handleAddProduct} className="addProduct-btn">Add Merchandise</button>
            <div className="cards-array">
                {allProducts}
                {/* <ProductCard image = "" name = "Product" price = "50"/> */}
            </div>

        </div>}
        </div>


    )

}