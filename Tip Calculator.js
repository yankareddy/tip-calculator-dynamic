let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let errorMsgElement = document.getElementById("errorMessage");
let errorMsg = "Please Enter a Valid Input.";
let tipAmountInput = document.getElementById("tipAmount");
let totalBillInput = document.getElementById("totalAmount");

function calculateButton() {
    let billAmountInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;

    if (billAmountInputValue === "") {
        errorMsgElement.textContent = errorMsg;
    } else if (percentageTipInputValue === "") {
        errorMsgElement.textContent = errorMsg;
    } else {
        errorMsgElement.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);
        let calculateTip = (percentageTip / 100) * billAmount;
        let calculateTotal = billAmount + calculateTip;

        tipAmountInput.value = calculateTip;
        totalBillInput.value = calculateTotal;
    }
}