 function shoppingCart (props) {
    const shoppingCart = props.shoppingCart.map((p,i)=>{
        return  <ProductDetail 
        addToCart={props.addItemToCart}
        key={i} 
        product={p} />
    });
    return (
    <div>({shoppingCart})
    <button></button>
    </div>

    )




}