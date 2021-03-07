import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs'
import Display from './components/Display'


function App() {
  const tabsData = [
    {label: "Tab 1", content: "Tab 1 content is showing here"},
    {label: "Tab 2", content: "Tab 2 content is showing here"},
    {label: "Tab 3", content: "Tab 3 content is showing here"}
  ];

  const [tabs, setTabs] = useState(tabsData);

  const[currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div>
      <Tabs 
        tabs = {tabs}
        currentTabIndex = {currentTabIndex}
        setCurrentTabIndex = {setCurrentTabIndex}
      />
      <Display 
        tabs = {tabs}
        currentTabIndex = {currentTabIndex}
      />
    </div>
  )

}

export default App;
