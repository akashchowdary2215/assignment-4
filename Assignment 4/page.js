const phone = 1234;
const pass = "test";

function login() {
  const enteredPhone = document.getElementById("num").value;
  const enteredPass = document.getElementById("pass").value;
  const result = document.getElementById("res");

  checkPhone(enteredPhone)
    .then(() => {
      return checkPass(enteredPass);
    })
    .then(() => {
      result.innerHTML = "<span class='text-success'>Login successful ✅</span>";
    })
    .catch((error) => {
      result.innerHTML = `<span class='text-danger'>${error}</span>`;
    });
}

function checkPhone(n) {
  return new Promise((resolve, reject) => {
    if (n == phone) {
      resolve(true);
    } else {
      reject("Invalid user ❌");
    }
  });
}

function checkPass(p) {
  return new Promise((resolve, reject) => {
    if (p === pass) {
      resolve(true);
    } else {
      reject("Invalid password ❌");
    }
  });
}
