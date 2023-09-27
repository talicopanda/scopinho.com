import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

export default function Cards({info}) {
    return (
        <div className='grid-container'>
            <div className='cards'>
                {info.map(card => {
                    const cardImg = getImage(card.thumbPath?.childImageSharp?.gatsbyImageData);
                    return (
                        <Link to={card.path} style={{ textDecoration: 'none'}} key={card.path}>
                            <div className='card' key={card.id}>
                                <div className="card-header">
                                    <div className="card-image">
                                    <GatsbyImage image={cardImg} alt={card.title} />
                                    </div>
                                    <h4>{card.title}</h4>  
                                </div>
                                <div className="card-info">
                                    <p>{card.intro}</p> 
                                </div>
                                <ul className='card-tags'>
                                    {card.tags.split(",").map(tag => <li key={tag}>{tag}</li>)}
                                </ul>
                            </div>
                        </Link>
                    )
                }
                )}
            </div>
        </div>
    )
}
