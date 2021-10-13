import React from 'react'



const Arrays = (props) => {
    console.log(props)
    const arr = ["Jorge", "Pablo", "Mauricio", "Rene", "Omar", "Danny", "Victor", "Carlitos", "Carlos", "Hector", "Rodrigo"];

    return (
        <div>
            <>

                {arr.join(" - ")}
                <ul>
                    <li>{arr[0]}</li>
                    <li>{arr[1]}</li>
                    <li>{arr[2]}</li>
                    <li>{arr[3]}</li>
                    <li>{arr[4]}</li>
                    <li>{arr[5]}</li>
                    <li>{arr[6]}</li>
                    <li>{arr[7]}</li>
                    <li>{arr[8]}</li>
                    <li>{arr[9]}</li>
                    <li>{arr[10]}</li>
                </ul>
                <ul>
                    {arr.map((arr, index) => <li key={index}>{index} {arr}</li>)}
                </ul>


            </>
        </div>
    )
}

export default Arrays
