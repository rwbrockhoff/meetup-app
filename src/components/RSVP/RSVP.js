import React, { Component } from 'react'
import './RSVP.css'
import PropTypes from 'prop-types';

export default class RSVP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rsvp: props.rsvp,
            count: props.count,
            waitlistCount: props.waitlistCount,
            link: props.link,
            shortList: []
        }
    }

    componentDidMount() {
        const { rsvp } = this.state
        let shortList = rsvp.slice(0, 6) || rsvp;
        this.setState({ shortList })
    }

    render() {
        const { count, waitlistCount, shortList, link } = this.state;

        return (
            <div className="event-body-right-panel-container"
                data-test="comp-rsvp">
                <h3 className="rsvp-title">Attendees ({count})</h3>
                <p className="rsvp-waitlist-count">{waitlistCount} on waitlist</p>
                <div className="list-container">
                    {shortList.map(e => {
                        const { id } = e.member;
                        let memberRole = e.member.role === 'organizer' ? 'organizer' : 'member';

                        return (
                            <a href={`https://www.meetup.com/${e.group.urlname}/members/${id}/`} key={id}>
                                <div className="member-card">
                                    <img src={e.member.photo.thumb_link} alt="user profile thumbnail" />
                                    <p>{e.member.name}</p>
                                    <p className="member-card-role">{memberRole}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <a href={`${link}attendees`}>
                    <button className="rsvp-button"><i className="fas fa-clipboard-list" />See All</button>
                </a>
            </div >
        )
    }
}

RSVP.propTypes = {
    rsvp: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    waitlistCount: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired
}