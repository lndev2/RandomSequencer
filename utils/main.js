const mainf = (function () {

    let currentSpeed = 60
    let interval = 1000
    let loop;

    let sound = document.getElementById("myAudio");

    function playAudio() {
        sound.load()
        sound.play();
        console.log('tick')
        setTimeout(function () { sound.pause() }, interval - 30)

    }

    


    function setSpeed() {
        currentSpeed = document.getElementById('quantity').valueAsNumber
        console.log('currentSpeed', currentSpeed)
        document.getElementById('speed').innerHTML = currentSpeed
    }

    function calculateInterval() {
        interval = 1000 / (currentSpeed / 60)
    }

    function playLoop() {
        clearInterval(loop)
        loop = setInterval(function(){playAudio()}, interval)
    }

    function start() {
        setSpeed()
        calculateInterval()
        playLoop()
    }


    function stop() {
        clearInterval(loop);
    }
    //--------


    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

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



    return [start, stop]

})()





