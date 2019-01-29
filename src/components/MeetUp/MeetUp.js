import React, { Component } from 'react';
import './MeetUp.css';
import EventInfo from './EventInfo/EventInfo'
import Details from '../Details/Details'
import RSVP from '../RSVP/RSVP'
import GitHubButton from '../GithubButton/GithubButton'
import { getDateString, filterWaitList, convertMilitaryTime, convertDurationTime } from './MeetUp.Logic'
import axios from 'axios';
import Loading from '../../assets/loading.svg'

export default class MeetUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event: {},
            rsvp: []
        }
    }

    componentDidMount() {
        axios.get('/api/get-meetup-info')
            .then(response => {
                const { eventResponse, rsvpResponse } = response.data;
                const { name, description, time, duration, link, rsvp_limit, yes_rsvp_count, waitlist_count, venue } = eventResponse[0]

                let date = getDateString(time);
                let rsvp = filterWaitList(rsvpResponse)
                let startTime = convertMilitaryTime(time)
                let endTime = convertDurationTime(time, duration)

                let event = {
                    name, date, startTime, endTime, link, description, rsvp_limit, yes_rsvp_count, waitlist_count, venue
                }
                this.setState({ event, rsvp })
            })
            .catch(err => console.log('GET Meetup Info Error: ', err))
    }

    render() {
        const { name, description, date, startTime, endTime, link, venue, yes_rsvp_count, waitlist_count } = this.state.event;
        const { rsvp } = this.state
        {
            if (name) {
                return (
                    <React.Fragment >
                        <div className="meet-up-container" data-test="comp-meet-up">
                            <GitHubButton />
                            <div className="meet-up-left-panel">
                                <p className="meet-up-left-panel-date">{`${date} ${startTime}`}</p>
                                <h1>{name}</h1>

                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-meetup" />Event</a>
                            </div>
                        </div >
                        <div className="event-body">
                            <div className="event-body-left-panel">
                                <Details description={description} />
                            </div>
                            <div className="event-body-right-panel">
                                <EventInfo
                                    venue={venue}
                                    startTime={startTime}
                                    endTime={endTime} />

                                <RSVP
                                    rsvp={rsvp}
                                    count={yes_rsvp_count}
                                    waitlistCount={waitlist_count}
                                    link={link} />
                            </div>
                        </div>
                    </React.Fragment >
                )
            }
            //Render Loading Spinner
            else return <img src={Loading} className="loading" alt="loading animation" data-test="comp-meet-up-loader" />;
        }
    }
}