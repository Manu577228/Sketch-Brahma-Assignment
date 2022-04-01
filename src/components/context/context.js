import React, { createContext, useCallback, useState } from 'react';
import axios from 'axios';

export const myContext = createContext();

export const AppContext = ({ children }) => {
    const [meals, setMeals] = useState([]);
    
    const fetchHomePageMeals = useCallback((searchTerm) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(res => {
        console.log(res.data.meals);
        setMeals(res.data.meals);
    });

    },[])

    return <myContext.Provider value={{fetchHomePageMeals, meals}}>{children}</myContext.Provider>
};
