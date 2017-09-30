'use strict'

import React from 'react';
import SearchBar from './SearchBar';

import sinon from 'sinon' ;

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SearchBar />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('searchBar starts with the default text', () => {
  const searchBar = shallow(
    <SearchBar />
  );

  const searchBarForm = searchBar.find('input');
  expect(searchBarForm.length).toBe(1) ;
  expect(searchBarForm.text()).toBe("") ;
});

test('searchBar triggers an event when submit is clicked', () => {

  const mockEvent = sinon.spy()
  const searchBar = shallow(
    <SearchBar onSubmit={mockEvent} />
  );

  searchBar.setState({ query: 'Test me' });
  searchBar.find('button').simulate('click');

  expect(mockEvent.calledOnce).toBeTruthy();
  expect(mockEvent.args[0][0]).toBe('Test me');
});
