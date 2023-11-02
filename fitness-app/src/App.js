import React from 'react';
import Navigation from './Navigation';
import Search from './Search';
import Filter from './Filter';
import List from './List';
import Info from './Info';

const App = () => {
  return (
    <div>
      <Navigation />
      <Search />
      <Filter />
      <List />
      <Info />
    </div>
  );
}

export default App;
