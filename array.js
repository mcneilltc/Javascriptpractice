var shoppingList = ['poptarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shoppingList[4]= 'coffee';
shoppingList.push('fruit loops');
//console.log(shoppingList);
shoppingList.splice(2,4, 'free trade coffee', 'rice', 'beans');
console.log(shoppingList);

var cart =[];
cart.push(shoppingList.pop('fruit loops'));
cart.push(shoppingList.shift('pop tarts'));

while (shoppingList.length> 0){
cart.push(shoppingList.pop());
}
cart.sort();
cart.reverse();
console.log("what I bought:", cart.join(','));