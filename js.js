let button = document.querySelector("#save");

button.addEventListener("click", function onclick(event) {
  let key = document.querySelector("#title").value;
  let reply = document.querySelector("#reply").value;
  localStorage.setItem(key, reply);
  location.reload();
});

let stored = Object.entries(localStorage);
for (let i = 0; i < stored.length; i++) {
  if (stored[i][0] !== "7566887b-6c8e-4f43-a469-59f0a26162a6") {
    let btn = document.createElement("BUTTON");
    btn.className = "btn btn-primary";
    btn.id = "reply" + i;
    btn.innerHTML = stored[i][0];
    document.querySelector("#buttons").appendChild(btn);
  }
}

for (let i = 0; i < stored.length; i++) {
  if (stored[i][0] !== "7566887b-6c8e-4f43-a469-59f0a26162a6") {
  let title = document.createElement("div");
  title.id = "p" + i;
  title.innerHTML = stored[i][0];
  document.querySelector("#edit").appendChild(title);

  let ta = document.createElement("textarea");
  ta.className = "form-control";
  ta.id = "textarea" + i;
  ta.innerHTML = stored[i][1];
  document.querySelector("#edit").appendChild(ta);

  let save = document.createElement("BUTTON");
  save.className = "btn btn-success";
  save.id = "save" + i;
  save.innerHTML = "Save";
  document.querySelector("#edit").appendChild(save);

  let btnDelete = document.createElement("BUTTON");
  btnDelete.className = "btn btn-danger";
  btnDelete.id = "delete" + i;
  btnDelete.innerHTML = "delete";
  document.querySelector("#edit").appendChild(btnDelete);
}
}

for (let i = 0; i < stored.length; ++i) {
  let elem = document.getElementById("delete" + i);
  if (typeof elem != undefined && elem != null) {
    elem.addEventListener("click", function () {
      deleter(stored[i][0]);
    });
  }
}

for (let i = 0; i < stored.length; ++i) {
  let elem = document.getElementById("save" + i);
  if (typeof elem != undefined && elem != null) {
    elem.addEventListener("click", function () {
      let contentSave = document.querySelector("#textarea" + i).value;
      console.log(contentSave);
      saver(stored[i][0], contentSave);
    });
  }
}
function deleter(key) {
  localStorage.removeItem(key);
  location.reload();
}

function saver(key, value) {
  console.log(key);
  localStorage.setItem(key, value);
  location.reload();
}

function copier(key) {
  let notObject = localStorage.getItem("7566887b-6c8e-4f43-a469-59f0a26162a6");
  let objectToUse = JSON.parse(notObject);

  var analystName = objectToUse.analystName;
  var fullCustname = objectToUse.fullCustname;
  var customerName = objectToUse.customerName;
  var ticket = objectToUse.ticket;
  var timeToReturn = objectToUse.timeToReturn;
  let res = key
    .replace(/<name>/g, analystName)
    .replace(/<customer>/g, fullCustname)
    .replace(/<customerFirstName>/g, customerName)
    .replace(/<ticket>/g, ticket)
    .replace(/<time>/g, timeToReturn);
  console.log(res);

  let dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = res;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

for (let i = 0; i < stored.length; ++i) {
  let elem = document.getElementById("reply" + i);
  if (typeof elem != undefined && elem != null) {
    elem.addEventListener("click", function () {
      copier(stored[i][1]);
    });
  }
}
