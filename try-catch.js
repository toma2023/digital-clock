function checkAge(){
const inputField = document.getElementById('age')
const ageText = inputField.value ;
const errorTag =document.getElementById('error');

try{
    const age =parseInt(ageText);
if(isNaN(age)){
throw "please enter a vALID NUMBER"
}
errorTag.innerHTML ='';

}
catch(err){
console.log('ERROR', err);
errorTag.innerHTML = 'Something wrong!'
}
finally{
    console.log('All done');
}

console.log(1111);
}