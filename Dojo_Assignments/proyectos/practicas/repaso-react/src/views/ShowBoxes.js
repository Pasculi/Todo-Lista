import React from 'react'
import './../App.css'
const ShowBoxes = (props) => {
    const { data } = props;
    return (
        <div>
            {
                data.length > 0 && data.map(
                    (item, i) =>
                        <div className='box' key={i} style={{
                            backgroundColor: item,
                            color: '#ffffff'
                        }}>
                            {item}
                        </div>)

            }
        </div>
    )
}

export default ShowBoxes;
