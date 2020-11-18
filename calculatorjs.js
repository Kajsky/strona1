
document.addEventListener("DOMContentLoaded", () => {
    const exitbutton = document.querySelector("#closebutton1")
    const resultText = document.querySelector(".resultText")

    exitbutton.addEventListener("click", e => {
        location.href = "menu.html"
    })

    document.querySelectorAll('.buttonNumbers').forEach((el) => {
        el.addEventListener('click', function(e) {
            if (e.target.dataset.number !== "="){
                resultText.innerHTML = resultText.innerHTML + e.target.dataset.number
            }else{
                let wynik = eval(resultText.innerText)
                resultText.innerHTML = wynik
            }
            if(e.target.dataset.number === "c"){
                resultText.innerHTML = ""
            }
            if(e.target.dataset.number === "backspace"){
                resultText.innerText = resultText.innerText.substr(0, resultText.innerText.length-10)
            }
        })
    })
})