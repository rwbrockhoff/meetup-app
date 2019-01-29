import React from "react";
import { shallow } from "enzyme";
import { findAttr } from '../../../../test/testUtils'
import EventInfo from './EventInfo'


describe("EventInfo Component", () => {
    let wrapper;
    let defaultProps = {
        venue: {
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            name: '',
            lat: 0,
            lon: 0
        }
    }

    beforeEach(() => {
        wrapper = shallow(<EventInfo {...defaultProps} />);
    });

    test('Renders without crashing', () => {
        const comp = findAttr(wrapper, 'comp-event-info')
        expect(comp).toHaveLength(1);
    })

    test('Renders start time', () => {
        let startTime = '7:00 PM'
        wrapper.setProps({ startTime })
        expect(wrapper.find('#start-time').text()).toBe(startTime)
    })

    test('Renders end time', () => {
        let endTime = '8:45 PM'
        wrapper.setProps({ endTime })
        expect(wrapper.find('#end-time').text()).toBe(endTime)
    })

    test('Renders link with name prop', () => {
        let name = 'ReactJS Dallas'
        wrapper.setProps({ venue: { name } })
        expect(wrapper.find('div.event-info-panel a').text()).toBe(name)
    })

    test('Renders google maps link', () => {
        expect(wrapper.find('div.event-info-panel a').html()).toContain('www.google.com/maps')
    })

})