let allDataUrl = window.location.search;
let getDataUrl = new URLSearchParams(allDataUrl);
let receiverUrl = getDataUrl.get("Kpd");
let messageUrl = getDataUrl.get("Psn");
let senderUrl = getDataUrl.get("Png");
let copy = document.getElementById("copy");
let make = document.getElementById("salin");

if (copy) {
  copy.addEventListener("click", function () {
    copy.classList.remove("salin");
    makeURL();
  });
}

function makeURL() {
  let receiverCopy = document.getElementsByClassName("receiverCopy")[0];
  let messageCopy = document.getElementsByClassName("messageCopy")[0];
  let senderCopy = document.getElementsByClassName("senderCopy")[0];

  receiverCopy.value = document.getElementById("Kpd").value;
  messageCopy.value = document.getElementById("Psn").value;
  senderCopy.value = document.getElementById("Png").value;
}

if (receiverUrl || senderUrl) {
  if (messageUrl) {
    // back page
    if (copy) {
      copy.innerHTML = "Salin link";
      copy.classList.add("read");
    }
  }
}

if (document.getElementsByClassName("read")[0]) {
  let make = document.getElementsByClassName("read")[0];
  make.addEventListener("click", function () {
    generateURL();
  });
}

function generateURL() {
  let baseUrl = document.getElementById("baseUrl");
  baseUrl.value = "https://iedmubarak.netlify.app/bismillah/index.html?" + getDataUrl;
  salin();
}

function salin() {
  let baseUrl = document.getElementById("baseUrl");
  baseUrl.select();
  document.execCommand("copy");
  alert("Sukses, link telah tersalin");
}
// copy.addEventListener("click", generateURL);

let receiverValue = document.getElementsByClassName("receiverName")[0];
if (receiverValue) {
  receiverValue.innerHTML = receiverUrl;

  let messageValue = document.getElementsByClassName("receiverMessage")[0];
  messageValue.innerHTML = messageUrl;

  let senderValue = document.getElementsByClassName("receiverSend")[0];
  senderValue.innerHTML = senderUrl;
}
