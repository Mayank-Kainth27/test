import React from "react";
import Card from "../../components/card";

const data = [{
    author: "mayank",
    url: "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bG92ZSUyMHBpY3xlbnwwfHx8fDE2ODIxODEzNjA&ixlib=rb-4.0.3&q=80&w=1080",
    links: "www.pornhub.com",
    made_with: ["html","css"],
    title: "title",
    compatible_browser: "chrome",
    responsive: "no",
    dependency: "no"
},
{
    author: "mayank",
    url: "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bG92ZSUyMHBpY3xlbnwwfHx8fDE2ODIxODEzNjA&ixlib=rb-4.0.3&q=80&w=1080",
    links: "www.pornhub.com",
    made_with: ["html","css"],
    title: "title",
    compatible_browser: "chrome",
    responsive: "no",
    dependency: "no"
}]

const Home = () => {
    return (
        <div>
            {
                data.map((item, index) => (
                    <Card key={index} data={item}/>
                ))
            }
        </div>
    )
}

export default Home;