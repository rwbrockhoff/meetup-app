import React from "react";
import { shallow } from "enzyme";
import { findAttr } from '../../../test/testUtils'
import MeetUp from './MeetUp'
import { getDateString, filterWaitList, convertMilitaryTime, convertDurationTime } from './MeetUp.Logic'

//--Test-Data--//
let members = [
    { member: { role: 'organizer' }, response: 'yes' },
    { member: { role: 'member' }, response: 'yes' },
    { member: { role: 'member' }, response: 'yes' },
    { member: { role: 'member' }, response: 'waitlist' },
    { member: { role: 'member' }, response: 'yes' },
    { member: { role: 'member' }, response: 'no' },
    { member: { role: 'member' }, response: 'yes' },
    { member: { role: 'member' }, response: 'yes' },
    { member: { role: 'member' }, response: 'yes' },
    { member: { role: 'member' }, response: 'yes' }
]

const event = {
    venue: {
        address_1: '123 Main St.',
        address_2: 'Apt 5',
        city: 'Plano',
        state: 'TX',
        lat: 0,
        lon: 0
    }
}
//--Test-Data--//

describe("MeetUp Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MeetUp />);
        wrapper.setState({ event })
    });

    test('Renders Loading Animation on Initial Load', () => {
        const comp = findAttr(wrapper, 'comp-meet-up-loader')
        expect(comp).toHaveLength(1);
    })

    test('Renders Component Elements when axios call returns', () => {
        wrapper.setState({
            event: { name: 'any value' }
        })
        const comp = findAttr(wrapper, 'comp-meet-up')
        expect(comp).toHaveLength(1);
    })

    test('Should have default event state', () => {
        let state = wrapper.instance().state
        expect(state.event).toEqual(event)
    })

    test('Should render name in h1 tag for event title', () => {
        let eventName = 'Dallas Meet Up'
        wrapper.setState({
            event: { name: eventName }
        })
        expect(wrapper.find('div.meet-up-left-panel h1').text()).toContain(eventName);
    })

    test('Should render date above h1 tag for event title', () => {
        let date = 'Tuesday, February 12th, 2019'
        let name = 'Dallas Meet Up'
        wrapper.setState({ event: { date, name } })
        expect(wrapper.find('p.meet-up-left-panel-date').text()).toContain(date)
    })

    test('getDateString should return a string', () => {
        let time = 1550019600000;
        let dateResult = getDateString(time);
        expect(typeof dateResult).toBe('string')
    })

    //Testing against my own arguments to ensure they are valid
    test('getDateString should receive correct input', () => {
        let time = 1550019600000;
        let currentTime = new Date().getTime()
        expect(time.length).toEqual(currentTime.length)
    })

    test('getDateString should contain a comma in string', () => {
        let time = 1550019600000;
        let dateResult = getDateString(time);
        expect(dateResult).toContain(',')
    })

    test('getDateString should return invalid date with incorrect input', () => {
        let time = 'bad-data'
        let dateResult = getDateString(time);
        expect(dateResult).toContain('Invalid Date')
    })

    test('filterWaitlist should return empty array with no arguments', () => {
        let result = filterWaitList();
        expect(result).toEqual([])
    })

    test('filterWaitlist should return only 6 members', () => {
        let result = filterWaitList(members);
        expect(result).toHaveLength(6);
    })

    test('filterWaitlist should only have members with yes response value', () => {
        let result = filterWaitList(members);
        let resultFilter = result.filter(e => {
            return e.response === 'no' || e.response === 'waitlist'
        })
        expect(resultFilter).toHaveLength(0)
    })

    test('convertMilitaryTime should convert miliseconds', () => {
        let result = convertMilitaryTime(1551402000000);
        expect(result).toBe('7:00 PM');
    })

    test('convertMilitaryTime should work for exactly 12pm', () => {
        let result = convertMilitaryTime(1551376800000);
        expect(result).toBe('12:00 PM');
    })

    test('convertMilitaryTime should work for AM', () => {
        let result = convertMilitaryTime(1551355200000);
        expect(result).toBe('6:00 AM');
    })

    test('convertDurationTime should convert miliseconds', () => {
        let result = convertDurationTime(1551402000000, 7200000);
        expect(result).toBe('9:00 PM');
    })

    test('should work in reverse and convert to AM', () => {
        let subtractTime = -(7200000 * 4)
        let result = convertDurationTime(1551402000000, subtractTime);
        expect(result).toBe('11:00 AM');
    })

})