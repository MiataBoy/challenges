let img = document.getElementById("theImg")
let previous = document.getElementById("previous")
let next = document.getElementById("next")

let images = ["cyberyata", "HELLO", "HelpimAnimated", "Imconcerned", "Monsteryata", "Orangutan", "RedMiat", "Yellata", "ConcernedMiat"]
let index = 0

previous.onclick = function(){
    index = (index === 0) ? images.length-1 : index-1
    img.src = `images/${images[index]}.${images[index] === 'HelpimAnimated' ? 'png' : 'jpg'}`
}

next.onclick = function(){
    index = (index === images.length-1) ? 0 : index+1
    img.src = `images/${images[index]}.${images[index] === 'HelpimAnimated' ? 'png' : 'jpg'}`
}