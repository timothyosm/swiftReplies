var a = document.getElementById("mainForm-_CreateUserDisplay");
var b = document.getElementById("mainForm-UserTitleDisplay");
var c = document.getElementById("mainForm-_RaisedUserTitle");
var d = document.getElementById("mainForm-_ProcessRef");
var e = document.getElementById("contentTitle");
var f = document.getElementById("mainForm-_OrganisationDisplay");
var g = document.querySelector("#mainForm-CreationUserTitleDisplay");

if (typeof a != undefined && a != null) {
  var analystName = document.getElementById("mainForm-_CreateUserDisplay")
    .value;
} else if (typeof b != undefined && b != null) {
  var analystName = document.getElementById("mainForm-UserTitleDisplay").value;
} else if (typeof g != undefined && g != null) {
  var analystName = document.querySelector("#mainForm-CreationUserTitleDisplay")
    .value;
}
if (typeof c != undefined && c != null) {
  var fullCustname = document.getElementById("mainForm-_RaisedUserTitle").value;
  var customerName = fullCustname.split(" ")[0];
}
if (typeof d != undefined && d != null) {
  var ticket = document.getElementById("mainForm-_ProcessRef").innerHTML;
}

let timeToReturn = new Date();
timeToReturn.setMilliseconds(
  Math.round(timeToReturn.getMilliseconds() / 1000) * 1000
);
timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60);
timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15);

chrome.runtime.sendMessage({
  analystName: analystName,
  fullCustname: fullCustname,
  customerName: customerName,
  ticket: ticket,
  timeToReturn: timeToReturn,
});
