document.querySelector('.coins').addEventListener('click', function(e) {
    const coin = e.target;
    coin.remove();
})

// Form Submission
const form = document.querySelector("#coin-submission");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // don't reload the page when this form submits
  
  const data = new FormData(form); // get the form data

  const howMany = data.get("how-many"); 
    console.log("howMany");
});