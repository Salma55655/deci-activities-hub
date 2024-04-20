const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

import {User} from './index2'

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

    try {
        const response = await fetch('https://dummyjson.com/users');
        const userData = await response.json();

        // Send the fetched user data as the response
        res.json(userData);

        userData.forEach(userData => {
            const user = new User(userData);
            user.displayInfo(); 
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Failed to fetch user data');
    }
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))





