import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const Authen = createContext();

export const AuthenProvider = (props) => {

    const [load, setLoad] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => setLoad(res.data));
        
    }, []);

    console.log('load', load);


    return(
        <Authen.Provider value={{load:load}}>
            {props.children}
        </Authen.Provider>
    )
}
