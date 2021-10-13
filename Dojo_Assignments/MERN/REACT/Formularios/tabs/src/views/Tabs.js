import React, { useState } from 'react';
import './Tabs.css';


const Tabs = (props) => {

    const [tabs, setTabs] = useState([{
        content: 'Tab 1 content is showing here.',
        title: 'Tab1',
        state: '',
    },
    {
        content: 'Tab 2 content is showing here.',
        title: 'Tab2',
        state: 'active'

    },
    {
        content: 'Tab 3 content is showing here.',
        title: 'Tab3',
        state: ''

    }]);

    const changeActive = (item, i) => {

        let newTabs = tabs.map(tab => {

            tab.title === tabs[i].title ? tab.state = 'active' : tab.state = '';
            return tab;
        });

        setTabs(newTabs);

    }


    return (
        <div className='tabcontainer'>

            <div className="titles">
                {tabs.map((item, i) =>
                    <a key={i} className={item.state} onClick={() => changeActive(item, i)} > {item.title} </a>
                )}
            </div>
            <div className="content">
                {tabs.filter(item => item.state === 'active').map((item, i) => <p key={i}> {item.content} </p>)}

            </div>

        </div>
    );
}

export default Tabs;