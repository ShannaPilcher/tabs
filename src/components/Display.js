import React from 'react'

const Display = (props) => {
    const{tabs, currentTabIndex} = props;

    return (
        <div className= "content">
            {tabs[currentTabIndex].content}
        </div>
    )
}

export default Display