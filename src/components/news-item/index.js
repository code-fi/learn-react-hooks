import React from 'react';
import like from '../../assets/images/like.png';
import likeActive from '../../assets/images/like-active.png';
import bookmark from '../../assets/images/bookmark.png';
import bookmarkActive from '../../assets/images/bookmark-active.png';
import IconButton from '../icon-button';
import moment from 'moment';

export default function NewsItem({article}) {
    const noimage = article.urlToImage == null;
    const time = moment(article.publishedAt).toLocaleString();
    return (
        <div className={`article-container ${noimage == null ? 'no-image' : null}`}>
           { noimage ? '' : ( <img  src={article.urlToImage} />) }
            <div className="content-container">
                <h4>{article.title}</h4>
                <p>
                    {article.description}
           </p>
                <div className="source">
                    {article.source.name}
           </div>
                <div className="meta-container">
                    <span className="time">{time}</span>
                    <div>
                        <IconButton
                            image={like}
                            title="Like"
                            activeImage={likeActive}
                            onClick={(state) => console.log(state)}
                        />
                        <IconButton
                            image={bookmark}
                            title="Save for later"
                            activeImage={bookmarkActive}
                            onClick={(state) => console.log(state)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}