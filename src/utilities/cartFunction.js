const cart = [];
export default cart;

  export function addToCart(title, imgpath, name, price) {
    cart.push({title: title, imgpath: imgpath, name:name, price:price})
    console.log('cart >', cart)
  }