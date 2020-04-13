import React from 'react';
import moment from 'moment';
import like from '../../assets/images/like.png';
import likeActive from '../../assets/images/like-active.png';
import bookmark from '../../assets/images/bookmark.png';
import bookmarkActive from '../../assets/images/bookmark-active.png';
import IconButton from '../../components/icon-button';

export default function NewsHeroItem({ article }) {
    const time = moment(article.publishedAt).fromNow();
    const imageURL = article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/1920x1080/22222/FFFFFF/?text=No+Image';

    return (
        <div style={{ backgroundImage: `url(${imageURL})` }} className="main-hero">
            <div className="overlay">
                <div className="content">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <span className="source">{article.source.name}</span>
                    <span className="time">{time}</span>
                </div>
                <div className="reactions-container">
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
    )
}