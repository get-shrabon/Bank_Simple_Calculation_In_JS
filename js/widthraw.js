document.getElementById("widthraw_btn").addEventListener("click", function () {
  const widthraw = document.getElementById("widthraw_feild");
  const widthrawPreviosAmountString = widthraw.value;
  const widthrawPreviosAmount = parseFloat(widthrawPreviosAmountString);

  const widthrawBalance = document.getElementById("widthraw_balance");
  const widthrawBalanceString = widthrawBalance.innerText;
  const widthrawBalanceTotal = parseFloat(widthrawBalanceString);

  const newWidthrawBalance = widthrawBalanceTotal + widthrawPreviosAmount;
  widthrawBalance.innerText = newWidthrawBalance;

  const balance = document.getElementById("total_balance");
  const balancePreviosTotalString = balance.innerText;
  const balancePreviosTotal = parseFloat(balancePreviosTotalString);

  const newBalanceTotal = balancePreviosTotal - widthrawPreviosAmount;
  balance.innerText = newBalanceTotal;

  widthraw.value = "";
});
