document.getElementById("deposit_btn").addEventListener("click", function () {
  const input = document.getElementById("deposit_feild");
  const depositString = input.value;
  const depositTotal = parseFloat(depositString);

  const deposit = document.getElementById("deposit_total");
  const depositPreviosString = deposit.innerText;
  const depositPreviosTotal = parseFloat(depositPreviosString);

  const depositNewTotal = depositPreviosTotal + depositTotal;
  deposit.innerText = depositNewTotal;

  const balance = document.getElementById("total_balance");
  const balancePreviosTotalString = balance.innerText;
  const balancePreviosTotal = parseFloat(balancePreviosTotalString);

  const newBalanceTotal = balancePreviosTotal + depositTotal;
  balance.innerText = newBalanceTotal;

  input.value = " ";
});
