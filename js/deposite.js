// console.log('deposit btn clicked');
// add event listener
// get deposite ammout
document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value; // get amount
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    // get the curent depo taotal
    // non input(textarea,) == innerText
    const depositeTotalElement = document.getElementById('dosepite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    depositeTotalElement.innerText = currentDepositeTotal;



    // clear the depo
    depositeField.value = '';




})