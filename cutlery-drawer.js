/* DOM JScript methods:
let elm = "";
elm = document.getElementyById("info");
// alert(elm.innerHTML) // -- can try this
// alert(elm.innerText) // -- or this
alert(elm.textContent)  // -- or this.
*/
/* FOR LOOP to ALERT entire text of .getElementsByTagName 
let elm = document.getElementsByTagName('p');	
for (let elmArray of elm) {
alert(elmArray.innerText);
}
*/
/* FOR LOOP to ALERT entire text of .getElementsByClassName method
let names = document.getElementsByClassName('name');
for (let name of names) {
alert(name.innerText);
}
*/
/*  Changing ATTRIBUTES & setTimeout method
// TODO:
// 1. Select the element who's attributes you'd like to change and set it to a variable
// 2. Change the width attribute of that element to 200 instead of the default 400 that it starts with in the HTML
// 3. Set a 1 second delay, then change it back to 400
let size = document.getElementById('lhl-logo');
size.width = "200";
setTimeout(function() {
size.width = "400"
}, 1000);
*/
/*
// TODO:
// 1. Find the input element by the ID using the `querySelector` DOM method
// 2. Set the `placeholder` attribute to some text value
document.querySelector('#name').setAttribute('placeholder', 'some text');
*/
