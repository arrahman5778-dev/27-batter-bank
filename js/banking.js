//  Deposit & Withdraw Input
function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input fileld
  inputField.value='';
  return amountValue;
}
// Total Deposit & Withdraw Update
function updateTotalField(totalFieldId , amount){
  const totalField =document.getElementById(totalFieldId);
  const totalText = totalField.innerText;
  const previousTotal = parseFloat(totalText);
  totalField.innerText = amount + previousTotal;
}
// Update Balance
function updateBalance(amount , isAdd){
  const balanceTotal = document.getElementById('balance-total');
  // const balanceTotalText = balanceTotal.innerText;
  // const previousBalanceTotal = parseFloat(balanceTotalText);
  const previousBalanceTotal =getCurrentBalance();
 if(isAdd == true){
  balanceTotal.innerText =previousBalanceTotal + amount;
 }
 else{
  balanceTotal.innerText =previousBalanceTotal - amount;
 }
}
// get Current Balance
function getCurrentBalance(){
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}
  //  Deposit  part
document.getElementById('deposit-button').addEventListener('click' , function(){
 const depositAmount = getInputValue('deposit-input');
  if(depositAmount > 0){
    updateTotalField('deposit-total' , depositAmount);
  updateBalance(depositAmount , true)
  }
})

// WithDraw  Part
document.getElementById('withdrow-button').addEventListener('click' , function(){
 const withdrawAmount = getInputValue('withdrow-input');
 const currentBalance = getCurrentBalance();
if(withdrawAmount > 0 && withdrawAmount < currentBalance){
  updateTotalField('withdrow-total' , withdrawAmount);
updateBalance(withdrawAmount, false);
};
})
