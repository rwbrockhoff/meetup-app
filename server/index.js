const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');
const { MEETUP_KEY } = process.env;
const port = 3051;
const app = express();

app.use(bodyParser.json())

app.get('/api/get-meetup-info', (req, res) => {
    axios.get(`https://api.meetup.com/reactjs-dallas/events?key=${MEETUP_KEY}&sign=true&photo-host=public&page=1
    `).then(eventResponse => {
        const { id } = eventResponse.data[0]

        axios.get(`https://api.meetup.com/reactjs-dallas/events/${id}/rsvps?&sign=true&photo-host=public`).then(rsvpResponse => {
            res.status(200).send({ eventResponse: eventResponse.data, rsvpResponse: rsvpResponse.data })
        })
    }).catch(error => console.log('ERROR /api/get-meetup-info :', error))
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
