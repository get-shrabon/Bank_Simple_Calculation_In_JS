document.getElementById("widthraw_btn").addEventListener("click", function () {
  const widthrawField = document.getElementById("widthraw_feild");
  const widthrawValueString = widthrawField.value;
  const widthrawValue = parseFloat(widthrawValueString);

  const widthraw = document.getElementById("widthraw_balance");
  const widthrawPlaceString = widthraw.innerText;
  const widthrawPlace = parseFloat(widthrawPlaceString);

  const updateBalance = widthrawPlace + widthrawValue;
  widthraw.innerText = updateBalance;

  const currentBalance = document.getElementById("total_balance");
  const currentBalanceString = currentBalance.innerText;
  const currentBalanceTotal = parseFloat(currentBalanceString);

  const updateBalanceTotal = currentBalanceTotal - updateBalance;
  currentBalance.innerText = updateBalanceTotal;

  widthrawField.value = " ";
});
