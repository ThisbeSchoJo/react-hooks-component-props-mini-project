import React from "react";
import MinutesToRead from "./MinutesToRead";

function Article( {title, date = "January 1, 1970", preview, minutes}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <MinutesToRead minutes={minutes} />
        </article>
    )
}

export default Article