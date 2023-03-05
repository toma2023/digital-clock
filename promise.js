/*console.log(1);
console.log(2);
setTimeout(()=>{
    console.log('lazy loged')
     }, 1000)


console.log(4);
console.log(5);
console.log(6);
*/
const getData = new Promise((resolve, reject) => {
 const  number = Math.random()*10;
 console.log(number);
 if(number < 5){
    resolve(56665);
 }
 else{
    reject('no data available')
 }
    //  
//

})
getData.then(data => console.log(data + 22))
.catch(err =>console.log('ERR:', err))

//console.log(getData);