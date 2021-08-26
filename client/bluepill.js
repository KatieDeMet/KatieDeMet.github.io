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
    projectDiv1.appendChild(title1)

    let projectImgDiv1 = document.createElement('div')
    projectImgDiv1.classList.add('projectImgDiv')
    projectDiv1.appendChild(projectImgDiv1)

    let projectImg1 = document.createElement('img')
    projectImg1.src = "client/assets/imamemeDemoPhoto.jpg"
    projectImg1.width = 300
    projectImgDiv1.appendChild(projectImg1)

    let projectLinkDiv1 = document.createElement('div')
    let githubLink1 = document.createElement('a')
    githubLink1.href = "https://github.com/KatieDeMet/imameme"
    githubLink1.innerHTML = "Github"
    let demoLink1 = document.createElement('a')
    demoLink1.href = "https://youtu.be/UPFSfziItqk "
    demoLink1.innerHTML = "Demo"
    let liveLink1 = document.createElement('a')
    liveLink1.href = "https://imameme.herokuapp.com/"
    liveLink1.innerHTML = "Live Site"

    projectLinkDiv1.appendChild(githubLink1)
    projectLinkDiv1.appendChild(demoLink1)
    projectLinkDiv1.appendChild(liveLink1)
    projectImgDiv1.appendChild(projectLinkDiv1)
    
    // displayHeaders([, "Budget Builder"])
    // displayImages([, "client/assets/budgetBuilderDemoPhoto.jpg"])
    // displayGithubLinks([, "https://github.com/KatieDeMet/simulation-vanillajs"])
    // displayLiveLinks([, "https://budgetbuilderkatie.herokuapp.com/"])

    displayContainer.appendChild(projectDiv1)
    
}

langButton.addEventListener('click', displayText)
devButton.addEventListener('click', displayText)
infoButton.addEventListener('click', displayText)
projectButton.addEventListener('click', displayProjects)