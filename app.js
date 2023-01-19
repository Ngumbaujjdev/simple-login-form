const scriptURL =
  "https://script.google.com/macros/s/AKfycbxvVDGVYbk-TmLNtzTdgOs8Xbz_Ony78iU_y0VPRk31QHRBrgySYKViozLcO1nxasm_/exec";
const form = document.forms["submit-to-google-sheet"];
const myalert = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      myalert.innerHTML = "sent succesifully";
      setTimeout(function () {
        myalert.innerHTML = " ";
      }, 2500);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
