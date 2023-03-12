const addProduct=()=>{
    const pf =document.getElementById('product-name')
    const pq =document.getElementById('product-quantity')
    const product= pf.value
    const quantity= pq.value
    pf.value=''
    pq.value=''
    displayProduct(product,quantity)
    saveLocalStorage(product,quantity)
    // console.log(product,quantity);
}

const displayProduct=(product,quantity)=>{

    const main =document.getElementById('container')
    const li = document.createElement('li')
    li.innerText =`${product}: ${quantity}`
    main.appendChild(li)
}

const getstoredShoppingCart=()=>{
    let cart ={}
    const storecart = localStorage.getItem('cart');
    if(storecart){
        cart= JSON.parse(storecart)
    }

    return cart
}

const saveLocalStorage=(product,quantity)=>{
    const cart = getstoredShoppingCart();
    cart [product]= quantity
    // console.log(cart);
    const convertStrigifyed = JSON.stringify(cart)
    // console.log(convertStrigifyed);
    localStorage.setItem('cart',convertStrigifyed)

}

const displaylocalitems=()=>{
    const saveCart = getstoredShoppingCart()
    // console.log(saveCart);
    for(const product in saveCart){
        const quantity = saveCart[product]
        // console.log(product,quantity);
        displayProduct(product,quantity)
    }
}
displaylocalitems()