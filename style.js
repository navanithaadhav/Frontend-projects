const formEl = document.forms.feedback; //get form in dom
//console.log(formEl.elements.fullname);
//object destuctring const{name,name}=formel.elements
const { fullname, email, type, description, terms } = formEl.elements;
console.log(fullname, email, type, description, terms);
