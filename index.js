const {prompt} = require('inquirer')

const fs = require('fs')

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message:'Where are you located?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Give us a bio?'
    },
    {
        type: 'input',
        name: 'LinkedIn',
        message: 'Please enter your LinkedIn.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Url?'
    }
]

const writeToFile = (filename, data) =>{
    let content =`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${data.name}</title>
  </head>
                    <body>
                        <div>
                            <h1>${data.name}</h1>
                            <h2>${data.location}</h2>
                            <div>
                                <p>${data.bio}</p>
                            </div>
                            <footer>
                                <a href="${data.linkedin}">linkedin</a>
                                <a href="${data.github}">GitHub</a>
                            </footer>
                        </div>
                    </body>
</html>`

fs.writeFile (filename, content, (err)=> {
    if (err){
        console.log (err)
    }console.log (`${filename} added!`)
})

}

// Call inquirer and prompt user
const initializer = () => {
    prompt(questions)
    .then (
        res => {
            writeToFile('./index.html', res)
        }
    )
        .catch(err => console.log(err))
}

initializer()