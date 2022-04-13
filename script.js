let allDataUrl = window.location.search;
let getDataUrl = new URLSearchParams(allDataUrl);
let receiverUrl = getDataUrl.get("Kpd");
let messageUrl = getDataUrl.get("Psn");
let senderUrl = getDataUrl.get("Png");
let copy = document.getElementById("copy");
let make = document.getElementById("salin");

//outputnya
let receiverValue = document.getElementsByClassName("receiverName")[0];
if (receiverValue) {
  receiverValue.innerHTML = receiverUrl;

  let messageValue = document.getElementsByClassName("receiverMessage")[0];
  messageValue.innerHTML = messageUrl;

  let senderValue = document.getElementsByClassName("receiverSend")[0];
  senderValue.innerHTML = senderUrl;
}

function makeURL() {
  let receiverCopy = document.getElementsByClassName("receiverCopy")[0];
  let messageCopy = document.getElementsByClassName("messageCopy")[0];
  let senderCopy = document.getElementsByClassName("senderCopy")[0];

  receiverCopy.value = document.getElementById("Kpd").value;
  messageCopy.value = document.getElementById("Psn").value;
  senderCopy.value = document.getElementById("Png").value;
}

function generateURL() {
  let baseUrl = document.getElementById("baseUrl");
  baseUrl.value = "https://btsadewa.github.io/iedmubarak/bismillah/index.html?" + getDataUrl;
}
copy.addEventListener("click", makeURL);
copy.addEventListener("click", generateURL);
