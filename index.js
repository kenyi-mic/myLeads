let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("linkedIn-client", JSON.stringify(myLeads));

  renderLeads();

  console.log(localStorage.getItem("linkedIn-client"));
});

let listItems = "";
function renderLeads() {
  for (i = 0; i < myLeads.length; i++) {
    listItems += `<li>
    <a href='${myLeads[i]}' target='_black'>
    ${myLeads[i]}</a>
    </li>
      `;
  }

  ulEl.innerHTML = listItems;
}
