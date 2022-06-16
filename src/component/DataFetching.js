import React from "react";

export default function DataFetching(){
    const [post, setPost] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(data => setPost(data.results))    
    }, [])
    return(
        <div>
            <ul>
                {
                    post.map(post => <li>{post.question}</li>)
                }
            </ul>
        </div>
    )
}