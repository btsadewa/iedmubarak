let allDataLink = window.location.search
let getDataLink = new URLSearchParams(allDataLink)
let receiverUrl = getDataLink.get("Kpd");
let messageUrl = getDataLink.get("Psn");
let senderUrl = getDataLink.get("Png");
let copy = document.getElementsByClassName("copy")[1];

if(copy) {
    copy.addEventListener("click", function() {
        copyData()
    })
}


function copyData () {
   let receiverCopy = document.querySelector(".reveiverCopy");
   let messageCopy = document.querySelector(".messageCopy");
   let senderCopy = document.querySelector(".senderCopy");
    //ambil data dari deklarasi diatas
    receiverCopy.value = document.querySelector("#Kpd").value;
    messageCopy.value = document.querySelector("#Psn").value;
    senderCopy.value = document.querySelector("#Png").value;

    let make = document.getElementsByClassName('salin')[0];
    if(make) {
        baseUrl();
    }
}

if(receiverUrl || senderUrl) {        
    if(messageUrl) {
        // back page
            if(copy) {
            copy.innerHTML = "Salin link";
            copy.classList.add('salin');
        }
    }
}

if(document.getElementsByClassName('salin')[0]) {
    let make = document.getElementsByClassName('salin')[0];
    make.addEventListener('click', function() {
        baseUrl();
    })
}

function baseUrl () {
    let urlBase = document.getElementById("baseUrl");
    urlBase.value = "https://btsadewa/github.io/index.html" + getDataLink;
    copyUrl()
}

function copyUrl () {
    let urlBase = document.getElementById("baseUrl");
    urlBase.select();
    document.execCommand("copy");
    alert("jancok")
}