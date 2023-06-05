//* ------ Selectors ------- */


const rockImg = document.getElementById("rock")
const paperImg = document.getElementById("paper")
const scissorImg = document.getElementById("scissor")


//? Secilen elemanlarin tasiyicilari
const yourChoiceDiv = document.getElementById("your-choice")


//* ------- Variables ------- */


//* ------- Event Listeners ------- */
rockImg.addEventListener("click", ()=> {
    const image = document.createElement("img")
    image.src = "./assets/rock.png"
    image.alt = "rock"
    yourChoiceDiv.appendChild(image)

    //? innerHTML
// yourChoiceDiv.innerHTML = `<img src="./assets/rock.png" alt="rock" `})

//* ------- Functions ------- */
