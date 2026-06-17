let transactions =
JSON.parse(localStorage.getItem("transactions"))
|| [];

function addTransaction(){

let description =
document.getElementById("description").value;

let amount =
Number(document.getElementById("amount").value);

let type =
document.getElementById("type").value;

if(description === "" || amount <= 0){
    alert("Enter valid details");
    return;
}

transactions.push({
    description,
    amount,
    type
});

localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
);

showTransactions();

document.getElementById("description").value="";
document.getElementById("amount").value="";
}

function showTransactions(){

let output="";
let balance=0;

transactions.forEach(item=>{

if(item.type === "Income"){
    balance += item.amount;
}else{
    balance -= item.amount;
}

output += `
<div class="transaction">
<b>${item.description}</b><br>
${item.type} - ₹${item.amount}
</div>
`;

});

document.getElementById("transactions")
.innerHTML = output;

document.getElementById("balance")
.innerHTML = "Balance: ₹" + balance;
}

showTransactions();