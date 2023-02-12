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

    // blance total 

    const blanceTotalElement = document.getElementById('balance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    const currentBlancetotal = previousBlanceTotal + newDepositeAmount;

    blanceTotalElement.innerText = currentBlancetotal;



    // clear the depo
    depositeField.value = '';

})

document.getElementById('btn-widthdraw').addEventListener('click', function () {
    const widthdtawField = document.getElementById('widthdraw-field');
    const newWidthdrawAmountString = widthdtawField.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawAmountString);


    const widthdrawTotalElement = document.getElementById('widthdraw-total');
    const previousWidthdawTotalString = widthdrawTotalElement.innerText;
    const previousWidthdawTotal = parseFloat(previousWidthdawTotalString);

    const currentWidthdraw = previousWidthdawTotal + newWidthdrawAmount;
    widthdrawTotalElement.innerText = currentWidthdraw;

    const blanceTotalElement = document.getElementById('balance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const blanceTotal = parseFloat(previousBlanceTotalString);

    const newBlaceTotal = blanceTotal - newWidthdrawAmount;

    blanceTotalElement.innerText = newBlaceTotal;


    widthdtawField.value = '';



})