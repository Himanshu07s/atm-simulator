
let balance = 100000;
let pin = "1234";
function login(){
let enteredPin=document.getElementById("pin").value;
if(enteredPin==pin){
    document.getElementById("login").style.display="none";
    document.getElementById("menu").style.display="block";
}
else{
    alert("INVALID PIN");

}
}
function checkBalance(){
alert("your balance is "+balance);
}
function deposit(){
    let amount = Number(prompt("Enter your deposit amount "));
    balance += Number(amount);
    updateBalance();
}
function withdraw(){
let amount = Number(prompt("Enter your withdraw amount "));
if(amount>balance){
    alert("INSUFFICIENT BALANCE !!")
}
else{
    balance-=Number(amount);
 updateBalance();
}
}
function updateBalance(){
    document.getElementById("balance").innerText="Balance: ₹" + balance;
}
