import React from "react";
import { shallow } from "enzyme";
import { findAttr } from '../../../test/testUtils'
import RSVP from './RSVP'


describe("RSVP Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <RSVP
                rsvp={[]}
                link={''}
                count={0}
                waitlistCount={0}
            />);
    });

    test('Renders without crashing', () => {
        const comp = findAttr(wrapper, 'comp-rsvp')
        expect(comp).toHaveLength(1);
    })

    test('Should render attendee count from state', () => {
        let count = 5;
        wrapper.setState({ count })
        expect(wrapper.find('h3.rsvp-title').text()).toContain(count)
    })

    test('Should not render member cards given no input', () => {
        expect(wrapper.find('div.member-card')).toHaveLength(0)
    })

    test('Should throw type error with incorrect member input', () => {
        expect(() => wrapper.setState({ shortList: [{ name: 'test' }] })).toThrow()
    })

    test('Should render correct member role', () => {
        wrapper.setState({
            shortList: [{
                member: {
                    id: 12345,
                    name: 'johan',
                    role: 'organizer',
                    photo: { thumb: 'imglink' }
                },
                group: { urlname: 'reactjsurlname' }
            },
            ]
        })
        expect(wrapper.find('p.member-card-role').text()).toBe('organizer')
    })

})