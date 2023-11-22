import React from "react";
import { Link } from "react-router-dom";
import "./not-found.scss"


export default function NotFound(){
    return (
        <div className="not-found-page">
            <h1>Not found page</h1>
            <p>Url not match in system</p>
            <p>
                <Link to="/" className="back-home-link">Back to home</Link>
            </p>
        </div>
    )
}