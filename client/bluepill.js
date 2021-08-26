const buttons = document.querySelectorAll('.myButton')
const langButton = document.getElementById('langButton')
const devButton = document.getElementById('devButton')
const infoButton = document.getElementById('infoButton')
const projectButton = document.getElementById('projectButton')
const displayContainer = document.getElementById('displayContainer')
const baseURL = ""


const displayText = (event) => {
    let id = event.target.id
    displayContainer.innerHTML = ``
    if(id === 'langButton') {
        axios.get('/katie/languages')
            .then(res => {
                let newPara = document.createElement('p')
                newPara.innerHTML = res.data
                newPara.classList.add("buttonPara")
                displayContainer.appendChild(newPara)
            })
            .catch(err => console.log(err))
    } else if (id === 'devButton') {
        axios.get('/katie/devops')
            .then(res => {
                let newPara = document.createElement('p')
                newPara.innerHTML = res.data
                newPara.classList.add("buttonPara")
                displayContainer.appendChild(newPara)
            })
            .catch(err => console.log(err))
    } else if(id === 'infoButton') {
        axios.get('/katie/more')
            .then(res => {
                let newPara = document.createElement('p')
                newPara.innerHTML = res.data
                newPara.classList.add("buttonPara")
                displayContainer.appendChild(newPara)  
            })
            .catch(err => console.log(err))
    } else {
        alert("Something went wrong")
    }
}

const displayProjects = () => {
    displayContainer.innerHTML = ``
    
    displayHeaders(["I'm A Meme", "Budget Builder"])
    displayImages(["client/assets/imamemeDemoPhoto.jpg", "client/assets/budgetBuilderDemoPhoto.jpg"])
    displayGithubLinks(["https://github.com/KatieDeMet/imameme", "https://github.com/KatieDeMet/simulation-vanillajs"])
    displayLiveLinks(["https://imameme.herokuapp.com/", "https://budgetbuilderkatie.herokuapp.com/"])

    
    
}

// const displayHeaders = (headerArr) => {
//     headerArr.forEach(header => {
//         let headerEle = document.createElement("h3")
//         headerEle.classList.add("projectHeader")
//         headerEle.innerHTML = header
//         displayContainer.appendChild(headerEle)
//     })
// }

const displayImages = (imgArr) => {
    imgArr.forEach(image => {
        let imgDiv = document.createElement('div')
        imgDiv.classList.add("projectDisplayContainer")
        let projectImg = document.createElement('img')
        projectImg.src = image
        projectImg.width = 300
        projectImg.classList.add('projectPhoto')
        imgDiv.appendChild(projectImg)
        displayContainer.appendChild(imgDiv)
    });
}


const displayGithubLinks = (gitLinksArr) => {

}

const displayLiveLinks = (liveLinksArr) => {

}

langButton.addEventListener('click', displayText)
devButton.addEventListener('click', displayText)
infoButton.addEventListener('click', displayText)
projectButton.addEventListener('click', displayProjects)
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', displayText);
// }