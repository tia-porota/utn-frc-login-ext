let selector = document.getElementById("extdomains");
selector.addEventListener("change", async (e) => {
  setValue(e.target.value);
});
async function setValue(value) {
  await chrome.storage.local.set({ value });
}

async function getValue() {
  const result = await chrome.storage.local.get("value");
  selector.value = !result.value ? "sistemas" : result.value;
  
}

getValue();
