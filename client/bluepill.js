const buttons = document.querySelectorAll('.myButton')
const langButton = document.getElementById('langButton')
const devButton = document.getElementById('devButton')
const infoButton = document.getElementById('infoButton')
const projectButton = document.getElementById('projectButton')
const displayContainer = document.getElementById('displayContainer')


const displayText = (event) => {
    let id = event.target.id
    displayContainer.innerHTML = ``
    if(id === 'langButton') {
                let newPara = document.createElement('p')
                newPara.innerHTML = "Languages:\tHTML5 | CSS | Javascript | JSON | NodeJS | Express | PostgreSQL"
                newPara.classList.add("buttonPara")
                displayContainer.appendChild(newPara)
    } else if (id === 'devButton') {
                let newPara = document.createElement('p')
                newPara.innerHTML = devArr = "DevOps Tools:\tGit | Github | Postman | Figma | CircleCI | Rollbar"
                newPara.classList.add("buttonPara")
                displayContainer.appendChild(newPara)
    } else if(id === 'infoButton') {
                let newPara = document.createElement('p')
                newPara.innerHTML = moreArr = "Development Skills:\tAgile Software Development | RESTful API | Effecient Algorithms"
                newPara.classList.add("buttonPara")
                displayContainer.appendChild(newPara)  
    } else {
        alert("Something went wrong")
    }
}

const displayProjects = () => {
    displayContainer.innerHTML = ``

    let projectDiv1 = document.createElement('div')
    projectDiv1.classList.add('projectDiv')

    let title1 = document.createElement('h3')
    title1.classList.add('projectTitle')
    title1.innerHTML = "I'm A Meme"
    projectDiv.appendChild(title1)

    let projectImgDiv = document.createElement('div')
    projectImgDiv.classList.add('projectImgDiv')
    let projectImg1 = document.createElement('img')
    projectImg1.src = "client/assets/imamemeDemoPhoto.jpg"
    projectImgDiv.appendChild('projectImg1')

    let projectLinksDiv = document.createElement('div')
    projectLinksDiv.classList.add('projectLinksDiv')
    let githubLink1 = document.createElement('a')
    githubLink1.href = "https://github.com/KatieDeMet/imameme"
    githubLink1.innerHTML = "Github"
    let demoLink1 = document.createElement('a')
    let liveLink1 = document.createElement('a')

    projectDiv1.appendChild(projectImgDiv)
    
    // displayHeaders(["I'm A Meme", "Budget Builder"])
    // displayImages([, "client/assets/budgetBuilderDemoPhoto.jpg"])
    // displayGithubLinks([, "https://github.com/KatieDeMet/simulation-vanillajs"])
    // displayLiveLinks(["https://imameme.herokuapp.com/", "https://budgetbuilderkatie.herokuapp.com/"])

    displayContainer.appendChild(projectDiv1)
    
}

// const displayHeaders = (headerArr) => {
//     headerArr.forEach(header => {
//         let headerEle = document.createElement("h3")
//         headerEle.classList.add("projectHeader")
//         headerEle.innerHTML = header
//         displayContainer.appendChild(headerEle)
//     })
// }

// const displayImages = (imgArr) => {
//     imgArr.forEach(image => {
//         let imgDiv = document.createElement('div')
//         imgDiv.classList.add("projectDisplayContainer")
//         let projectImg = document.createElement('img')
//         projectImg.src = image
//         projectImg.width = 300
//         projectImg.classList.add('projectPhoto')
//         imgDiv.appendChild(projectImg)
//         displayContainer.appendChild(imgDiv)
//     });
// }


// const displayGithubLinks = (gitLinksArr) => {

// }

// const displayLiveLinks = (liveLinksArr) => {

// }

langButton.addEventListener('click', displayText)
devButton.addEventListener('click', displayText)
infoButton.addEventListener('click', displayText)
projectButton.addEventListener('click', displayProjects)