import axios from "axios";
import React, { createContext, useEffect, useRef, useState } from "react";

export const Authen = createContext();

export const AuthenProvider = (props) => {
  const [load, setLoad] = useState([]);
  const [adana, setAdana] = useState(true);
  const [filter, setFilter] = useState([]);
  const mailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const [reco, setReco] = useState({
    name:'', email:'', password:''
  });

  const tikla = (e) => {
    e.preventDefault();
    console.log(mailRef.current.value, passwordRef.current.value);
  }

  const tikla2 = (e) => {
    e.preventDefault();
    setReco([...reco, {
      name:nameRef.current.value,
      email:mailRef.current.value,
      password:passwordRef.current.value
    }])
  }

  useEffect(() => {
    return () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setLoad(res.data).limit(5));
    };
  }, []);

  console.log("filter", filter);

  useEffect(() => {
    const ada = load.filter((er) =>
      er.name.toLowerCase().includes(filter.toLowerCase())
    );
    if (ada.length > 0) {
      setLoad(ada);
    } 
  }, [filter]);

  return (
    <Authen.Provider value={{ load, adana, setAdana, filter, setFilter, mailRef, passwordRef, tikla, nameRef, tikla2 }}>
      {props.children}
    </Authen.Provider>
  );
};
