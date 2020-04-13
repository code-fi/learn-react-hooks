import React from 'react';
import './style.css';
import NewsItem from '../news-item';
import NewsItemLg from '../news-item-lg';

export default function NewRow({ articles }) {
    const canScroll = articles.length <= 10;
    const newsList = articles.map((article, index) => {
        const lg = index % 5 == 0 && !canScroll,
            component = lg ? <NewsItemLg article={article} /> : <NewsItem article={article}/>;
        return <div className={[lg ? 'padded lg' : 'padded']} key={index} children={component} />
    })
    return (
        <div className="container">
            <h2>Breaking News</h2>
            <div  className="flexList">
                {newsList}
            </div>

        </div>
    )
}