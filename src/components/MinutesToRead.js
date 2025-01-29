import React from "react"
import blogData from "../data/blog";

// console.log(blogData);
// posts.minutes = minutes it takes to read

function MinutesToRead({minutes}) {
    function getReadingTime(minutes) {
        if (minutes < 30) {
            const cups = Math.ceil(minutes/5)
            return "☕️".repeat(cups) + `${minutes} min read`
        } else {
            const bentos = Math. ceil(minutes/10)
            return "🍱".repeat(bentos) + `${minutes} min read`
        }
    }

    return (
        <p>{minutes ? getReadingTime(minutes) : "No reading time available"}</p>
    );
    // return (
    //     <p>{minutes ? `${minutes} minute read` : "No reading time available"}</p>
    // )
// write a ternary
// if minutes <30 :
//      for each 5 mins, display 1 coffee cup emoji
// if minutes >30 minutes :
//      for every 10 mins, display a bento box emoji
}

export default MinutesToRead

