import React from "react";
import {Component_2} from "./Component_2";
import {Data} from "../App"

interface Component_1Props{
    result: Data | undefined
    onChange: (pageNumber: number) => void
    handleReset: () => void
}

export default function Component_1(props: Component_1Props){
    const {result, onChange, handleReset} = props

    function handleChange(pageNumber: number){
        onChange(pageNumber)
        
    }
    return (
        <>
            <h1>Component 1 template</h1>
            <Component_2 
            result={result} 
            onChange={handleChange} 
            handleReset={handleReset}/>
        </>
    )
}