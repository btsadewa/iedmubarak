let allDataUrl = window.location.search;
let getDataUrl = new URLSearchParams(allDataUrl);
let receiverUrl = getDataUrl.get("Kpd");
let messageUrl = getDataUrl.get("Psn");
let senderUrl = getDataUrl.get("Png");
let copy = document.getElementById("copy");

let receiverValue = document.getElementsByClassName("receiverName")[0];

if (receiverValue) {
  receiverValue.innerHTML = receiverUrl;

  let messageValue = document.getElementsByClassName("receiverMessage")[0];
  messageValue.innerHTML = messageUrl;

  let senderValue = document.getElementsByClassName("receiverSend")[0];
  senderValue.innerHTML = senderUrl;
}
