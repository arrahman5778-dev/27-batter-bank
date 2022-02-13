function getInputValue(){
  const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  // clear input fileld
depositInput.value='';

  return depositAmount;

}



document.getElementById('deposit-button').addEventListener('click' , function(){
//  Input part
  // const depositInput = document.getElementById('deposit-input');
  // const depositAmountText = depositInput.value;
  // const depositAmount = parseFloat(depositAmountText);
const depositAmount = getInputValue();
  // get current Deposit
  const depositTotal =document.getElementById('deposit-total');
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);

  depositTotal.innerText = depositAmount + previousDepositTotal;

  // Update Balance
  const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;

   const previousBalanceTotal = parseFloat(balanceTotalText);

  balanceTotal.innerText =previousBalanceTotal + depositAmount;


// // clear input fileld
// depositInput.value='';



})

// WithDraw 
document.getElementById('withdrow-button').addEventListener('click' , function(){

  // WIthdraw input 
  const withdrawOutput = document.getElementById('withdrow-input');
  const withdrawAmountText = withdrawOutput.value;
  const withdrawAmount = parseFloat(withdrawAmountText);
//  Total Withdraw
  const withdrawTotal = document.getElementById('withdrow-total');
  const withdrawTotalText = withdrawTotal.innerText;
  const withdrawTotalAmount = parseFloat(withdrawTotalText);
  withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount ;

  // clear input fileld
  withdrawOutput.value='';

  // After Withdraw Balance Update
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousWithdrawBalance = parseFloat(balanceTotalText);

 balanceTotal.innerText = previousWithdrawBalance - withdrawAmount;
 
})