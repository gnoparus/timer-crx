const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  console.log(`clicked - ${name}`);

  //   chrome.storage.sync.set({ name: name });
  chrome.storage.sync.set({ name }, () => {
    console.log(`Name has been set to ${name}`);
  });
});

chrome.storage.sync.get(["name", "test"], (res) => {
  nameInput.value = res.name ?? "No name";
  console.log(`Retrieved name : ${res.name}`);
});
