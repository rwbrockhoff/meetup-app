import React from "react";
import { shallow } from "enzyme";
import { findAttr } from '../../../../test/testUtils'
import GithubRepo from './GithubRepo'


describe("GithubRepo Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<GithubRepo />);
    });

    test('Renders without crashing', () => {
        const comp = findAttr(wrapper, 'comp-github-repo')
        expect(comp).toHaveLength(1);
    })

    test('Renders link to Github', () => {
        expect(wrapper.find('a').text()).toContain('Github')
    })

})