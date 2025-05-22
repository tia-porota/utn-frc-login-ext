let selector = document.getElementById("extdomains");
selector.addEventListener("change", async (e) => {
    setValue(e.target.value)
});
async function setValue(value) {
    await browser.storage.local.set({ value });

}

async function getValue(){
    const result = await browser.storage.local.get("value");
    selector.value = !result ? "sistemas" : result.value;
    

}

getValue()