import React, { useState } from "react"
import { Data } from "../App"

interface Component_2Props{
    result: Data | undefined
    onChange: (pageNumber: number) => void
    handleReset: () => void
}

export const Component_2 = (props: Component_2Props) => {
    const {result, onChange, handleReset} = props
    const [pageNumber, setPageNumber] = useState<number>(1)

    function handleChange(){
        setPageNumber(pageNumber + 1)
        onChange(pageNumber + 1)
    }

    
    return (
        <>
            <h1>COmponent 2 template</h1>
            <p>
                <button onClick={handleChange}>Change page number</button>&nbsp;&nbsp;&nbsp;<span>{pageNumber}</span>
            </p>
            <p>
                <button onClick={() => {
                    handleReset()
                    setPageNumber(1)
                }}>Reset page</button>
            </p>
            <ul>
                {
                    result?.data.map(function(item){
                        return <li>
                            <p>{item.id}</p>
                            <p>{item.email}</p>
                            <p>{item.avatar}</p>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

// export function(){}
// export const a = 10;
/**
 * 
 * default:
 *  + k cho export default biến
 * + cho exporrt default function
 * k có default:
 * + k cho exporrt function
 * + cho export biến
 */