document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    if(isNaN(parseFloat(depositAmount))){
        alert('Please provide number');
        depositField.value = '';
        return;
    }

    if(parseFloat(depositAmount) < 0){
        alert('Please provide valid number.');
        depositField.value = '';
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const amount = parseFloat(depositTotalElement.innerText) + parseFloat(depositAmount);
    depositTotalElement.innerText = amount.toFixed(2);

    const balanceTotalElement = document.getElementById('balance-total');
    const totalAmount =  parseFloat(balanceTotalElement.innerText) + parseFloat(depositAmount);
    balanceTotalElement.innerText = totalAmount.toFixed(2);

    depositField.value = ''; 
})