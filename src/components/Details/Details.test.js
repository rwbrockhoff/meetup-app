import React from "react";
import { shallow } from "enzyme";
import { findAttr } from '../../../test/testUtils'
import Details from './Details'


describe("Details Component", () => {

    let wrapper;
    let description = '<p>Testing Input</p>'
    let defaultProps = { description }

    beforeEach(() => {
        wrapper = shallow(<Details {...defaultProps} />);
    });

    test('Renders without crashing', () => {
        const comp = findAttr(wrapper, 'comp-details')
        expect(comp).toHaveLength(1);
    })

    test('Renders given text', () => {
        expect(wrapper.find('div.description').html()).toContain(description);
    })

})