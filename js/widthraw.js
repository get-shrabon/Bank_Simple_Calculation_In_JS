function getByElemantId(input_feild) {
  const widthraw = document.getElementById(input_feild);
  const widthrawPreviosAmountString = widthraw.value;
  const widthrawPreviosAmount = parseFloat(widthrawPreviosAmountString);
  widthraw.value = "";
  return widthrawPreviosAmount;
}

function getElement(element) {
  const total = document.getElementById(element);
  const totalString = total.innerText;
  const totalAmount = parseFloat(totalString);
  return totalAmount;
}

document.getElementById("widthraw_btn").addEventListener("click", function () {
  const widthrawPreviosAmount = getByElemantId("deposit_feild");
  const widthrawBalanceTotal = getElement("total_balance");

  const newWidthrawBalance = widthrawBalanceTotal + widthrawPreviosAmount;
  widthrawBalance.innerText = newWidthrawBalance;

  const balancePreviosTotal = getElement("total_balance");

  const newBalanceTotal = balancePreviosTotal - widthrawPreviosAmount;
  balance.innerText = newBalanceTotal;

  widthraw.value = "";
});
