const emojisContainer = document.getElementById("emojiContainer");
const addBtn = document.getElementById("push-btn");
const addbegingn = document.getElementById("unshift-btn")
const input = document.getElementById("emoji-input");
const removeFirts = document.getElementById("pop-btn");
const removeLast = document.getElementById("shift-btn");

const myEmojis = ["👩‍💻", "🐶", "⚽"]

function renderEmojis() {
    emojisContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojisContainer.innerHTML += myEmojis[i]
    }
}
renderEmojis()




addBtn.addEventListener("click", function () {
    if (input.value) {
        myEmojis.push(input.value)
    }
    input.value = ""
    renderEmojis()
})

addbegingn.addEventListener("click", function () {
    if (input.value) {
        myEmojis.unshift(input.value)
    }
    input.value = ""
    renderEmojis()
})

removeFirts.addEventListener("click", function () {

    if (input.value) {
        myEmojis.pop(input.value)
    }
    input.value = ""
    renderEmojis()
})

removeLast.addEventListener("click", function () {

    if (input.value) {
        myEmojis.shift(input.value)
    }
    input.value = ""
    renderEmojis()
})