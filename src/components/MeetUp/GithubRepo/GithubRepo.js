import React from 'react'
import './GithubRepo.css'

export default function GithubRepo() {
    return (
        <a href="https://github.com/rwbrockhoff/reactjsmeetup">
            <div className="github-repo-container" data-test="comp-github-repo">
                <p><i className="fab fa-github-alt" />Github Repo</p>
            </div>
        </a>
    )
}
