miatLijst = ['ConcernedMiat', 'cyberyata', 'GotPhonesOnYourGames', 'HELLO', 'HelpimAnimated', 'Imconcerned', 'Monsteryata', 'Orangutan', 'RedMiat', 'Yellata']
console.log(miatLijst)
miatLijst = shuffle(miatLijst);

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

miatLijst = shuffle(miatLijst);
console.log(miatLijst)
miatLijst.forEach((miat) => {
    let imag = document.createElement("img")
    imag.src = `images/background.png`;
    imag.id = `images/${miat}.${miat === 'HelpimAnimated' ? 'png' : 'jpg'}`;
    imag.height = 200;
    imag.width = 200;
    document.getElementById("images").appendChild(imag);
});

miatLijst = shuffle(miatLijst);
console.log(miatLijst)

miatLijst.forEach((miat) => {
    let imag = document.createElement("img")
    imag.src = `images/background.png`;
    imag.id = `images/${miat}.${miat === 'HelpimAnimated' ? 'png' : 'jpg'}`;
    imag.height = 200;
    imag.width = 200;
    document.getElementById("buttons").appendChild(imag);
});