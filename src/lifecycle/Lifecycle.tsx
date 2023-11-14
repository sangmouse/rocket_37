import React from "react";
import { Data } from "../App";
import Lifecycle2 from "./Lifecycle2";

interface LifecycleProps {
    data: Data | undefined
}

export default function Lifecycle(props: LifecycleProps){


    console.log("lifecycle init");
    

    return (
        <>
            <h1>Lifecycle Component Heading</h1>
            <Lifecycle2 data={props.data}/>
        </>
    )
}