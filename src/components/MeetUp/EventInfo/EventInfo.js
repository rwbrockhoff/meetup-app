import React from 'react'
import './EventInfo.css'
import PropTypes from 'prop-types';

export default function EventInfo(props) {
    const { address_1, address_2, city, state, name, lat, lon } = props.venue
    const { startTime, endTime } = props
    return (
        <div className="event-body-right-panel-container event-info" data-test="comp-event-info">
            <div className="event-info-panel">
                <p>START</p>
                <h4 id="start-time">{startTime}</h4>
                <p>END</p>
                <h4 id="end-time">{endTime}</h4>
            </div>
            <div className="event-info-panel">
                <a href={`https://www.google.com/maps/search/?api=1&query=${lat}%2C${lon}`} target="_blank" rel="noopener noreferrer">
                    <p><i className="fas fa-map-marker-alt" />{name}</p>
                </a>
                <p>{address_1}</p>
                <p>{address_2}</p>
                <p>{`${city}, ${state}`}</p>
            </div>
        </div>
    )
}

EventInfo.defaultProps = {
    venue: {}
}

EventInfo.propTypes = {
    venue: PropTypes.shape({
        address_1: PropTypes.string.isRequired,
        address_2: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired
    }).isRequired
}