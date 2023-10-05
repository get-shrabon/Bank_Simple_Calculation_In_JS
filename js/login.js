document.getElementById("submit_btn").addEventListener("click", function () {
  const emailFeild = document.getElementById("email");
  const email = emailFeild.value;
  const passwordFeild = document.getElementById("password");
  const password = passwordFeild.value;

  if (email != "shrabon@gmail.com" && password != "shoun") {
    window.location.href = "bank.html";
  } else {
    alert("Your Password Incorrect!!");
  }
});
