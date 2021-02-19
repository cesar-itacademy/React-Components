import React from 'react';
import {generate as id} from 'shortid'

const Card = ({author, date, img, title, key, tags, views, children}) => {
        return (
            <>
                <div className="card">
                    <h2 className="card title">{title}</h2>
                    <img className="card_img" src={img} alt={title} />
                    <p className="card_description">{children}</p>
                    <p className="card_author">{author}</p>
                    <ul className="card_tags">
                        {tags.map(tag=>(
                            <li key={id()} className="card_tag">{tag}</li>
                        ))}
                    </ul>
                    <p className="card_views">{views}</p>
                    <p className="card_date">{date}</p>
                </div>
            </>
        )
};
    
    
                        

export default Card;