import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import SearchBar from 'components/SearchBar';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<SearchBar/>);
});

it('has a textfield as a search bar', () => {
    expect(wrapper.find(TextField).length).toEqual(1);
});

describe('the textfield', () => {
    beforeEach(() => {
        wrapper.find(TextField).simulate('change', {
            target: {value: 'cute puppies'}
        });
    });

    it('has a textfield that users can type in', () => {
        expect(wrapper.find(TextField).prop('value')).toEqual('cute puppies')
    });
});