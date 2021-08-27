const alienShip1 = document.getElementById('alienShip1')
const alienShip2 = document.getElementById('alienShip2')
const bluePill = document.getElementById('bluePill')
const earth = document.getElementById('whiteRabbit')
const container = document.getElementById('contactContainer')

const makeVisible = (event) => {
    if (event.target.id === 'alienShip1') {
        let textArea1 = document.getElementById('projectText1')
        if(textArea1.classList[0] === 'hidden') {
            textArea1.classList.toggle('visible')
        } else {
            textArea1.classList.toggle('hidden')
        }
    } else if (event.target.id === 'alienShip2') {
        let textArea2 = document.getElementById('projectText2')
        if(textArea2.classList[0] === 'hidden') {
            textArea2.classList.toggle('visible')
        } else {
            textArea2.classList.toggle('hidden')
        }
    }
}

const toggleEarth = () => {
    earth.classList.toggle('hideEarth')
    earth.classList.toggle('showEarth')  
}

const takeBluePill = () => {
    window.location="bluepill.html"  
}

alienShip1.addEventListener('click', makeVisible)
alienShip2.addEventListener('click', makeVisible)
bluePill.addEventListener('click', takeBluePill)
container.addEventListener('mouseenter', toggleEarth)
container.addEventListener('mouseleave', toggleEarth)