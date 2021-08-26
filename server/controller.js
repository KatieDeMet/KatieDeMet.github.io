const path = require('path')

langArr = ["Languages:\tHTML5 | CSS | Javascript | JSON | NodeJS | Express | PostgreSQL"]
devArr = ["DevOps Tools:\tGit | Github | Postman | Figma | CircleCI | Rollbar"]
moreArr = ["Development Skills:\tAgile Software Development | RESTful API | Effecient Algorithms"]

module.exports = {
    mainFile:  (req, res) => {
        res.sendFile(path.join(__dirname, "../index.html"))
    },
    getLanguages: (req, res) => {
        res.status(200).send(langArr[0])
    },
    getDevs: (req, res) => {
        res.status(200).send(devArr[0])
    },
    getMore: (req, res) => {
        res.status(200).send(moreArr[0])
    }
}