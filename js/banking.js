function getInputValue(inputId) {
    // get input
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const newAmount = parseFloat(inputAmountText);
    // clear input field 
    inputField.value = '';
    return newAmount;
}
function updateTotalField(totalFieldId, amount) {
    // debugger;
    // set amount 
    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const previousTotal = parseFloat(totalFieldText);
    // add previous and current amount 
    totalField.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}
// handle deposit event handler 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit amount
    const newDepositAmount = getInputValue('deposit-input');
    // get deposit total amount
    if (newDepositAmount > 0) {
        const newDepositTotal = updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
});

// handle withdraw event handler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw amount 
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    // get withdraw total amount
    if ((withdrawAmount > 0) && (withdrawAmount < currentBalance)) {
        const newWithdrawTotal = updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You cannot withdraw money as you do not have that balance.')
    }
});