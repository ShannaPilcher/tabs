import React, {useState} from 'react'

const Tabs = (props) => {
    const{tabs, currentTabIndex, setCurrentTabIndex} = props;

    const tabStyle = (index) => {
        if(index === currentTabIndex) {
            return "selectedTab"
        }
        else {
            return "nonSelectedTab"
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index)
    }

    return (
        <div>
            {tabs.map((item, index) => 
            <button className={`tab ${tabStyle(index)}`} onClick= {(e) => setSelectedTab(index) } >
            {item.label}
            </button>
            )}
        </div>
    )
}

export default Tabs