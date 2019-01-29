import React from "react";
import { shallow } from "enzyme";
import { findAttr } from '../../../test/testUtils'
import GithubButton from './GithubButton'


describe("GithubButton Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<GithubButton />);
    });

    test('Renders without crashing', () => {
        const comp = findAttr(wrapper, 'comp-github-repo')
        expect(comp).toHaveLength(1);
    })

    test('Renders link to Github', () => {
        expect(wrapper.find('a').text()).toContain('Github')
    })

})