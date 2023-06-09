const words = document.getElementById("buttons");

words.addEventListener("click", function (event) {
  let textareaValue = document.getElementById("search-word").value;
  let apiUrl =
    "https://www.superheroapi.com/api.php/106269109091843/search/" + textareaValue;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.results && Array.isArray(data.results)) {
        data.results.forEach((element) => {
          const publisher = element.biography.publisher;
          const Name = element.biography.full-name;
          console.log(publisher);
          document.getElementById("results").innerHTML = "";

          const addition = document.createElement("div");
          addition.id = "add";

          addition.innerHTML = publisher;
         

          document.getElementById("results").appendChild(addition);

          var input = document.getElementById("search-word");

          // Execute a function when the user presses a key on the keyboard
          input.addEventListener("keypress", function (event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
              // Cancel the default action, if needed
              event.preventDefault();
              // Trigger the button element with a click
              document.getElementById("buttons").click();
            }
          });
        });
      }
    })
    .catch((error) => console.log(error));
});



/*tslint:disabled*/

