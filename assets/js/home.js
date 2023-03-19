console.log("Script is loaded successfully");

// Buttons
const saveItems = document.querySelector(".saveItems");
const deleteItems = document.querySelector(".deleteItems");

// items
const description = document.getElementById("description");
const cat = document.getElementById("cat");
const date = document.getElementById("date");

// checkbox
var checkboxes = document.getElementsByName("selection");

// saveItems.addEventListener("click", async (e) => {
//   e.preventDefault();
//   console.log("saving the items...", description.value, cat.value, date.value);

//   if (
//     cat.value !== undefined &&
//     date.value !== undefined &&
//     description.value !== undefined &&
//     cat.value !== "" &&
//     date.value !== "" &&
//     description.value !== ""
//   ) {
//     try {
//       var body = {
//         description: description.value,
//         category: cat.value,
//         date: date.value,
//       };

//       let res = await fetch("/save", {
//         Method: "POST",
//         Headers: {
//           "Content-Type": "application/json",
//         },
//         Body: JSON.stringify(body),
//       });
//     } catch (error) {
//       console.log("error", error);
//     }
//   } else {
//     alert("Please fill all the fields!");
//   }
// });

deleteItems.addEventListener("click", async (e) => {
  e.preventDefault();

  let items = [];

  for (var i = 0; i < checkboxes.length; i++) {
    // console.log(checkboxes[i]);
    if (checkboxes[i].checked) {
      items.push(checkboxes[i].id);
    }
  }

  if (items.length > 0) {
    fetch("/delete", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then(function (res) {
        console.log("getting response ", res);
      })
      .catch(function (res) {
        console.log("Getting error:", res);
      });
  } else {
    alert("Please select items to delete!");
  }

  setTimeout(() => {
    alert("data deleted successfully! ");
    window.location.replace("http://localhost:3000");
    location.reload();
  }, 500);
});
