const express = require('express')
const app = express()
const fs = require('fs')
const resume = JSON.parse(fs.readFileSync('./resume.json'))
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send(resume)
})

app.listen(port, () => {
    console.log('It\'s Lit!!! 🔥🔥🔥')
})

// const general = jsonObj
//     .filter(g => g.type === "general")
    // .forEach(g => { 
    //     console.log(`${g.name} ${g.phoneNumber} ${g.email}`)
    //     return(`${g.name} ${g.phoneNumber} ${g.email}`)
    // })

// const test = JSON.parse(general)

// const brand = jsonObj
//     .filter(b => b.type === "brand-statement")

// const project = jsonObj
//     .filter(p => p.type === "project")
