function a(){
    console.log('a');
    b();
    console.log('aaa')
}
function b(){
    console.log('b');
    d();
    console.log('bb')
}
function d(){
    console.log('d');
    console.log('dd')
}
function x(){
    console.log('x');
    console.log('xx')
}
function y(){
    console.log('y');
    z();
    console.log('yy');
}
setTimeout(()=>{
console.log('ha');
}, 1000)
function z(){
    console.log('z');
    console.log('zz');
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

a();
x();