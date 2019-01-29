const functions = require('firebase-functions');

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.use(bodyParser.json())

app.get('/api/get-meetup-info', (req, res) => {
    axios.get(`https://api.meetup.com/reactjs-dallas/events?key=${functions.config().meetup.key}&sign=true&photo-host=public&page=1
    `).then(eventResponse => {
        const { id } = eventResponse.data[0]
        axios.get(`https://api.meetup.com/reactjs-dallas/events/${id}/rsvps?&sign=true&photo-host=public`)
            .then(rsvpResponse => {
                res.status(200).send({ eventResponse: eventResponse.data, rsvpResponse: rsvpResponse.data })
            })
    }).catch(error => console.log('ERROR /api/get-meetup-info :', error))
})

exports.app = functions.https.onRequest(app)