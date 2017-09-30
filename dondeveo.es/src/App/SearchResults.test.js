'use strict'

import React from 'react';
import SearchResults from './SearchResults';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SearchResults
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('SearchResults starts with an empty list', () => {
  // Render a checkbox with label in the document
  const searchResults = shallow(
    <SearchResults />
  );

  const results = searchResults.find('#results');
  expect(results.length).toBe(1) ;
  expect(results.find('li').length).toBe(0) ;
});