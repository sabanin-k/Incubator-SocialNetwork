import React from "react";
import newspaper from "../../assets/images/newspaper.png";
import UpButton from "../common/UpButton/UpButton";
import styles from "./News.module.css";

const News = ({news, hasContent, getContent}) => {
    const showContent = (content) => {
        return (
            <p>{content}</p>
        )
    }

    const toggleContent = (id, content, text) => {
        return (
            <>
                <span className={styles.contentSpan} onClick={(event) => {
                    event.preventDefault();
                    getContent(id)
                }}>{text}</span>
                {showContent(content)}
            </>
        )
    }

    return (
        <>
            <section className={styles.newsSection}>
                {news.map(item => {
                    return (
                        <a key={Math.random()} href={item.url} className={styles.link} target='_blank' rel='noreferrer'>
                            {/* <div className={styles.imgDiv}> */}
                            <img src={item.urlToImage || newspaper} alt="news" width='200px' className={styles.img} />
                            {/* </div> */}
                            <div className={styles.textDiv}>
                                <p className={styles.phrase}>{item.title}</p>
                                <span className={styles.calendarData}>{item.publishedAt}</span>
                                <div className={styles.content}>
                                    {item.description !== null && (!hasContent.includes(item.url)
                                        ? toggleContent(item.url, '', 'Показать')
                                        : toggleContent(item.url, item.description, 'Убрать'))}
                                        
                                </div>
                            </div>
                        </a>
                    )
                })}
            </section>
            <UpButton />
        </>)
}

export default News;