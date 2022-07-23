let btn = document.querySelector(".generate");
let srl = document.querySelector(".serial");
btn.onclick = function () {
  generateSerial();
};

function generateSerial() {
  let chars =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*";
  let count = 15;
  let result = "";
  for (let i = 0; i < count; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  srl.innerHTML = result;
}
