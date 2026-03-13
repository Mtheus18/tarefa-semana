function addTask(button){

    const day = button.parentElement
    const input = day.querySelector("input")
    const list = day.querySelector("ul")

    if(input.value === "") return

    const li = document.createElement("li")

    li.innerHTML = `
    ${input.value}
    <button onclick="removeTask(this)">X</button>
    `

    list.appendChild(li)

    input.value = ""

}

function removeTask(button){
    button.parentElement.remove()
}

document.querySelectorAll(".day input").forEach(input => {

    input.addEventListener("keydown",function(event){
        if(event.key === "Enter"){
            const button = input.parentElement.querySelector("button")
            addTask(button)
        }
    })
})