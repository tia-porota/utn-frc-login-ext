let selector = document.getElementById("txtDominios");

async function onLoad() {
  const result = await browser.storage.local.get({ value: 0 });
  selector.value = result.value || "sistemas";
}
onLoad();
