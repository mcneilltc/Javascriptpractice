/*var shoppingList = ['poptarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
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
console.log("what I bought:", cart.join(','));*/


//TEST//
const a= [1,2, 3]; 
const b= a.concat(4,5,6);  
//console.log(b); 
const c=a.concat([4,5,6]);  
//console.log(c)
console.log(b===c);


//
var arr = [19, 5, 42, 2, 77];
function a(nums){
    pos = nums.filter(function(x){ return x >= 0 });
    var min1 = Math.min.apply(Math, pos);
    pos.splice(pos.indexOf(min1), 1);
    var min2 = Math.min.apply(Math, pos);
    return console.log(min1 + min2);
}
a(arr);

//iterate through an array//

var array=['term1', 'term2', 'term3'];
iterate = function(){
    for(let i=0; i< array.length;){
        var x = array[i];
        console.log(x)
        i++;
    }
}
console.log(iterate());

//without running the code, what will the output be?
const object ={
    a: [1,2,3],
    b:[{
        num: 4,
    },
{ num:5}],
}
function c(d,e){
    let f = d["a"] ? e() : " blah";
    console.log(f);
}
c(object, ()=> {
    console.log("fah");
    return "blah";
});


