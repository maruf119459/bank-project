document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const balanceTotalElement = document.getElementById('balance-total');


    if(isNaN(parseFloat(withdrawField.value))){
        alert('Please provide number');
        withdrawField.value = '';
        return;
    }

    if(parseFloat(withdrawField.value) < 0){
        alert('Please provide valid number.');
        withdrawField.value = '';
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');

    if(parseFloat(withdrawField.value) > parseFloat(balanceTotalElement.innerText)){
        alert('Not sufficient balance!');
        withdrawField.value = '';
        return;
    }

    const currentWithdrawTotal = parseFloat(withdrawField.value) + parseFloat(withdrawTotalElement.innerText);
    withdrawTotalElement.innerText = currentWithdrawTotal.toFixed(2);

    const newBalanceTotal = parseFloat(balanceTotalElement.innerText) - parseFloat(withdrawField.value);

    balanceTotalElement.innerText = newBalanceTotal.toFixed(2);

    withdrawField.value = '';



})