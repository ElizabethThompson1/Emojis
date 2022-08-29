const emojisContainer = document.getElementById("emojiContainer");
const addBtn = document.getElementById("push-btn");
const addbegingn = document.getElementById("unshift-btn")
const input = document.getElementById("emoji-input");
const removeFirts = document.getElementById("pop-btn");
const removeLast = document.getElementById("shift-btn");

const myEmojis = ["👩‍💻", "🐶", "⚽"]

for (let i = 0; i < myEmojis.length; i++) {
    emojisContainer.innerHTML += myEmojis[i]
}


addBtn.addEventListener("click", function () {

    myEmojis.push(input.value)
    for (let i = 0; i < myEmojis.length; i++) {
        emojisContainer.innerHTML = myEmojis
    }
    input.value = ""
})

addbegingn.addEventListener("click", function () {

    myEmojis.unshift(input.value)
    for (let i = 0; i < myEmojis.length; i++) {
        emojisContainer.innerHTML = myEmojis
    }
    input.value = ""
})

removeFirts.addEventListener("click", function () {

    myEmojis.pop()
    for (let i = 0; i < myEmojis.length; i++) {
        emojisContainer.innerHTML = myEmojis
    }
    input.value = ""
})

removeLast.addEventListener("click", function () {

    myEmojis.shift()
    for (let i = 0; i < myEmojis.length; i++) {
        emojisContainer.innerHTML = myEmojis
    }
    input.value = ""
})