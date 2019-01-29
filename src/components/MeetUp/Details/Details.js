import React from 'react'
import './Details.css'

export default function Details(props) {
    const { description } = props;
    let doc = new DOMParser().parseFromString(description, 'text/html');
    return (
        <div className="details-container" data-test="comp-details">
            <h3 className="title">Details</h3>
            <div className="description" dangerouslySetInnerHTML={{ __html: doc.body.innerHTML }} />
        </div>
    )
}
