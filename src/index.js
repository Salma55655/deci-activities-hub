const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

// setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// setup the express assets path
app.use('/', express.static(path.join(__dirname, '../client')))

// API calls ------------------------------------------------------------------------------------
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, './client/pages/user.html'));
})

app.get('/users', async (req, res) => {
    // Write your logic here
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function processUserData(usersData) {
    usersData.forEach(userData => {
        const user = new User(userData);
        user.displayInfo(); 
    });
}



fetch('https://dummyjson.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // For debugging, log the fetched data
        processUserData(data); // Call a function to process the fetched data
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
