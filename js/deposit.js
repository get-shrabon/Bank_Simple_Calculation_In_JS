document.getElementById("deposit_btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit_feild");
  const depositValue = depositField.value;
  const currentDepositValue = parseFloat(depositValue);

  const depositPlace = document.getElementById("deposit_total");
  const depositTotal = depositPlace.innerText;
  const previusDepositPlace = parseFloat(depositTotal);

  const depositTotalBalance = previusDepositPlace + currentDepositValue;
  depositPlace.innerText = depositTotalBalance;

  const balanceTotal = document.getElementById("total_balance");
  const currentBalanceTotalString = balanceTotal.innerText;
  const currentBalanceTotal = parseFloat(currentBalanceTotalString);

  const totalBalance = currentBalanceTotal + currentDepositValue;
  balanceTotal.innerText = totalBalance;

  depositField.value = " ";
});
