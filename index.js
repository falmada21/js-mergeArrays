// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


let array1 = ['pasta','salad','noodle soup'];
let array2 = ['dumplings','tacos','steak'];


let array3 = []; //array1.concat(array2);

for (let i=0; i< Math.max(array1.length,array2.length); i++ )
{
  if (i < array1.length) 
      array3.push(array1[i]);
  
  if (i<array2.length)
        array3.push(array2[i]);
  
//console.log(i-array2.length);
}
/*
for (let i=0; i<array1.length + array2.length; i++ ){
  if (i < array1.length) {
      array3.push(array1[i]);
  }
  else {
        array3.push(array2[i-array2.length]);
  }
console.log(i-array2.length);
  }
*/

//for (var x=0; x<array2.length;x++){
   //array1.push(array2[x]);
//}
console.log(array1);

console.log(array2);
console.log(array3);
