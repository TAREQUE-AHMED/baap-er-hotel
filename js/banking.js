function getInputValue(depositId) {
    const depositInput = document.getElementById(depositId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    return depositAmount;
}

function updateTotalField(totalField, depositAmount) {
    const depositTotal = document.getElementById(totalField);
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
}
function getCurrentBalance() {
     const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(totalBalanceText);
    return previousBalanceTotal;
}

function updateBalance(depositAmount, isAdd) {
    const totalBalance = document.getElementById('total-balance');
    // const totalBalanceText = totalBalance.innerText;
    // const previousBalanceTotal = parseFloat(totalBalanceText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        totalBalance.innerText = previousBalanceTotal + depositAmount;
    } else {
        totalBalance.innerText = previousBalanceTotal - depositAmount;
    }

}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-amount');

    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);

        updateBalance(depositAmount, true);
    }

});

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);

        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw money');
    }

});









//common code
/* const depositInput = document.getElementById('deposit-amount');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */


//withdraw

// const withdrawInput = document.getElementById('withdraw-amount');
// const withdrawAmountText = withdrawInput.value;
// const withdrawAmount = parseFloat(withdrawAmountText);



//current deposit
// const depositTotal = document.getElementById('deposit-total');
// const depositTotalText = depositTotal.innerText;
// const previousDepositTotal = parseFloat(depositTotalText);
// depositTotal.innerText = previousDepositTotal + depositAmount;

// total
// const withdrawTotal = document.getElementById('withdraw-total');
// const withdrawTotalText = withdrawTotal.innerText;
// const previousTotalBalance = parseFloat(withdrawTotalText);

// withdrawTotal.innerText = withdrawAmount + previousTotalBalance;
// depositInput.value = '';

//update balance
// const totalBalance = document.getElementById('total-balance');
// const totalBalanceText = totalBalance.innerText;
// const previousBalanceTotal = parseFloat(totalBalanceText);
// totalBalance.innerText = previousBalanceTotal + depositAmount;

//update balace after withdraw

// const balanceTotal = document.getElementById('total-balance');
// const balanceTotalText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
// withdrawInput.value = '';
//handle withdraw button 