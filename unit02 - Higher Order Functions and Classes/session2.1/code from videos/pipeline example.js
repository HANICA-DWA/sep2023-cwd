
const myOrder = {
  name:     "glitter shoes",
  price:    25.00,
  quantity: 100,
}

function totalPrice( order ) {
  return order.price * order.quantity;
}

function withVAT( price ) {
  return price * 1.20; // 20% VAT
}

function withShipping( price ) {
  if(price < 20)
    return price + 5.95;
  else
    return price;
}

function pipeLine( input, functions ) {
  let result = input;
  for( f of functions ) {
    result = f( result );
  }
  return result
}

function giftWrapped( price, wrapStyle = "simple" ) {
  if( wrapStyle == "simple" )
    return price + 2.00;
  else if( wrapStyle == "fancy" )
    return price + 5.00;
  else
    return price;
}

result1 = pipeLine( myOrder, [totalPrice,withVAT,withShipping,giftWrapped])
console.log("result from 1st pipline:", result1);

result2 = pipeLine( myOrder, [totalPrice,withVAT,withShipping,input => giftWrapped(input,"fancy")])
console.log("result from 1st pipline:", result2);




function giftWrapped( price, wrapStyle = "simple" ) {
  if( wrapStyle == "simple" )
    return price + 2.00;
  else if( wrapStyle == "fancy" )
    return price + 5.00;
  else
    return price;
}

const fancyWrapped = function( price ) {
   return giftWrapped( price, "fancy")
}

const simpleWrapped = function( price ) {
   return giftWrapped( price, "simple")
}

const notWrapped = function( price ) {
   return giftWrapped( price, "none")
}

console.log("fancyWrapped(100)", fancyWrapped(100))
console.log("simpleWrapped(100)",simpleWrapped(100))
console.log("notWrapped(100)",   notWrapped(100))


function makeWrapper( style ) {
  return function(price) {
    return giftWrapped(price, style)
  }
}

fancyWrapped2 = makeWrapper("fancy")

console.log("fancyWrapped2(100)", fancyWrapped2(100))

console.log("pipeline met fancyWrapped2:", pipeLine( myOrder, [totalPrice,withVAT,withShipping,fancyWrapped2]))

function giftWrapped( price, wrapStyle = "simple" ) {
  if( wrapStyle == "simple" )
    return price + 2.00;
  else if( wrapStyle == "fancy" )
    return price + 5.00;
  else if( wrapStyle == "armour" )
    return price + 2000.00;
  else
    return price;
}


console.log("pipeline met makeWrapper('armour'):", pipeLine( myOrder, [totalPrice,withVAT,withShipping,makeWrapper("armour")]) )

console.log( "makeWrapper('armour')(100)", makeWrapper("armour")(100) )

makeWrapper = style => price => giftWrapped(price, style)
