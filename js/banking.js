document.getElementById("deposit-button").addEventListener('click', function () {

    const depositinput = document.getElementById('deposit-input');
    const newDepositAmountText = depositinput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);
    //update deposit total


    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmountText = depositTotal.innerText

    const previousDepositAmount = parseFloat(previousDepositAmountText)
    const newDepositTotal = previousDepositAmount + newDepositAmount
    depositTotal.innerText = newDepositTotal;
    //update account balance
    const balancetotal = document.getElementById("balance-total");
    const balanceTotalText = balancetotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balancetotal.innerText = newBalanceTotal;

    depositinput.value = '';
});

//withdraw handler
document.getElementById("withdraw-button").addEventListener('click', function () {
    // console.log('gg');
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    //set withdrawTotal
    const withdrawTotal = document.getElementById("withdraw-total");
    // console.log(newWithdrawAmount);
    const previousWithdrawText = withdrawTotal.innerText;
    // console.log(previousWithdrawText);
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    withdrawInput.value = '';
});
