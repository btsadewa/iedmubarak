let allDataLink = window.location.search;
let getDataLink = new URLSearchParams(allDataLink);
let receiverUrl = getDataLink.get("Kpd");
let messageUrl = getDataLink.get("Psn");
let senderUrl = getDataLink.get("Png");
let copy = document.getElementsByClassName("copy")[1];
let baseUrl = document.getElementById("baseUrl");

if (copy) {
  copy.addEventListener("click", function () {
    copyData();
  });
}

function copyData() {
  let receiverCopy = document.querySelector(".reveiverCopy");
  let messageCopy = document.querySelector(".messageCopy");
  let senderCopy = document.querySelector(".senderCopy");
  //ambil data dari deklarasi diatas
  receiverCopy.value = document.querySelector("#Kpd").value;
  messageCopy.value = document.querySelector("#Psn").value;
  senderCopy.value = document.querySelector("#Png").value;

  let make = document.getElementsByClassName("salin")[0];
  if (make) {
    baseUrl();
  }
}

copy.addEventListener("click", copyData);

if (receiverUrl || senderUrl) {
  if (messageUrl) {
    // back page
    if (copy) {
      copy.innerHTML = "Salin link";
      copy.classList.add("salin");
    }
  }
}

if (document.getElementsByClassName("salin")[0]) {
  let make = document.getElementsByClassName("salin")[0];
  make.addEventListener("click", function () {
    baseUrl();
  });
}

function baseUrl() {
  let urlBase = document.getElementById("baseUrl");
  urlBase.value = "https://btsadewa.github.io/iedmubarak/" + getDataLink;
  copyUrl();
}

function copyUrl() {
  let urlBase = document.getElementById("baseUrl");
  urlBase.select();
  document.execCommand("copy");
  alert("jancok");
}

let receiverValue = document.getElementsByClassName("receiverName")[0];
// jika class receiverData ada (mencegah errior)
if (receiverValue) {
  receiverValue.innerHTML = receiverUrl;

  let messageValue = document.getElementsByClassName("receiverMessage")[0];
  messageValue.innerHTML = messageUrl;

  let senderValue = document.getElementsByClassName("receiverSend")[0];
  senderValue.innerHTML = senderUrl;
}
