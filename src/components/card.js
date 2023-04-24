import React from "react";
import image from '../assets/image-login.png';
import './card.css';

const Card = ({data}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img alt="not found" src={data.url}/>
            </div>
            <div className="card-data">
                <div className="author-info">
                    <section>
                        <label style={{display:"block"}}>Author</label>
                        <span style={{margin:0}}>{data.author}</span>
                    </section>
                    <section>
                        <label style={{display:"block"}}>Links</label>
                        <a href={data.links}>Code and Demo</a>
                    </section>
                    <section>
                        <label style={{display:"block"}}>Made With</label>
                        {
                            data.made_with.map((key, index) => {
                                return (
                                    <span key={index}>{`${key} `}</span>
                                )
                            } )
                        }
                    </section>
                </div>
            </div>
            <div className="apply-button">
                <button onClick={() => {alert("Clicked")}}>Apply</button>
            </div>
        </div>
    )
}

export default Card;