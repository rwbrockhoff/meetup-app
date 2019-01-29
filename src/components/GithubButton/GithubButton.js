import React from 'react'
import './GithubButton.css'

export default function GithubButton() {
    return (
        <a href="https://github.com/rwbrockhoff/meetup-app">
            <div className="github-repo-container" data-test="comp-github-repo">
                <p><i className="fab fa-github-alt" />Github Repo</p>
            </div>
        </a>
    )
}
