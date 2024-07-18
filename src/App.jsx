import React from 'react'
import Overview from './components/Overview.jsx'
import Header from './components/Header.jsx';
import "../public/assets/global.css";
import TopCardList from './components/TopCardList.jsx';

function App() {
  return <>
  <Header/>
  <TopCardList/>
  <Overview/>
  </>
}

export default App;
