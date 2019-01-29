## Development
Developed using React, Node, Express, Firebase, Jest, and Enzyme.

## Styling
I enjoy using Sass, but it involves adding node-sass, and for me, setting up mixins. On a larger scale project, I might use Sass, incorporate MaterialUI, styled components, or whatever the codebase is already using.

## Endpoints
Hitting the API, it considers waitlist members as "yes" members. I did not find any documentation on limiting the amount of members I could grab at a time to lessen the response payload. However, the members are filtered to only display members who are going, and to display the organizer first. 

### Potential Next Steps
Optionally, the comments v3 endpoint could have been used to render comments below the attendees. However, I wanted to stick to the endpoints requested. The API was well documented (and has a console), so I really enjoyed working with it. 

### Image Optimization
Images assets are saved as small SVG files, except for the FontAwesome CDN. Optionally, I could save the FontAwesome Icons as SVGs as well. 

### Testing
There is a Postman Collection file included in the repo, and a code coverage report below. 


## Links
[Live App](https://reactjsdallasmeetup.firebaseapp.com/) | 
[Code Coverage](https://i.ibb.co/nmfLZcH/code-coverage.png) | 
[My Portfolio](https://www.ryanbrockhoff.com)