let inputName = document.querySelector("#inputName");
let inputEmail = document.querySelector("#inputEmail");
let form = document.querySelector("form");
let submitBtn = document.querySelector(".submit");

async function editedUser(id, obj) {
  await fetch(`http://localhost:8080/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: inputName.value,
      email: inputEmail.value,
    }),
  });
  location.href = "editUser.html";
}