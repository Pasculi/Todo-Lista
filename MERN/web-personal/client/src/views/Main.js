import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';

const Main = () => {
    const [message, setMessage] = useState("Cargando...")
    useEffect(() => {
        axios.get("http://localhost/manager")
            .then(res => setMessage(res.data.message))
    }, []);
    return (
        <div>
            <PersonForm />

        </div>
    )
}
export default Main;