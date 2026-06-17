/*const name = "Megha Sarkar"
let height = 5.2;
var isLikePizza = true;
console.log(name + " is "+" " +height +" " +"feet tall"+ " " +isLikePizza + "she likes pizza");*/
/*
function greet(name){
    console.log("hello" + name);
}
let name = "Megha";
greet(name);*/
/*
function isLegalTodrive(age){
    if(age >= 18){
        console.log("you are legal to drive");
    } else {
        console.log("you are not legal to drive");
    }
}
isLegalTodrive(20);
isLegalTodrive(16);
*/
/*
function isPass(score) {
    if (score >= 40) {
        console.log("you have passed the exam");
    } else {
        console.log("you have not passed the exam ");
    }
}
isPass(60);
isPass(30);
*/
/*function isLegal(age){
    if(age >= 18){
        console.log("yes, you are allowed to drive");
    } else{
        console.log("you are not allowed to drive");
    }
}
for(let i = 0; i <= 100; i++){
    isLegal(i);
}*/

function likePizza(type){
    if(type === "thincrust"){
        return "I will have the pizza";
    } else {
    "I'll not have the pizza";
    }
}
console.log(likePizza("thincrust"));