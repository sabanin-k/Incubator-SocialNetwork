import React from "react";
import newspaper from "../../assets/images/newspaper.png";
import Preloader from "../common/Preloader/Preloader"
import styles from "./News.module.css";

const News = (props) => {
    const getContent = (content) => {
        return (
            <p>{content}</p>
        )
    }

    const hideContent = (id, content) => {
        return (
            <>
                <span className={styles.contentSpan} onClick={(event) => {
                    event.preventDefault();
                    props.getContent(id)
                }}>Показать</span>
                {getContent(content)}
            </>
        )
    }

    const showContent = (id, content) => {
        return (
            <>
                <span className={styles.contentSpan} onClick={(event) => {
                    event.preventDefault();
                    props.getContent(id)
                }}>Убрать</span>
                {getContent(content)}
            </>
        )
    }
    if (props.isFetching) {
        return <Preloader />
    } else {
        return (
            <>
                <section className={styles.newsSection}>
                    {props.news.map(item => {
                        return (
                            <a key={Math.random()} href={item.url} className={styles.link} target='_blank' rel='noreferrer'>
                                {/* <div className={styles.imgDiv}> */}
                                    <img src={item.urlToImage || newspaper} alt="news" width='200px' className={styles.img} />
                                {/* </div> */}
                                <div className={styles.textDiv}>
                                    <p className={styles.phrase}>{item.title}</p>
                                    <span className={styles.calendarData}>{item.publishedAt}</span>
                                    <div className={styles.content}>
                                        {item.description !== null && (!props.hasContent.includes(item.url) ? hideContent(item.url, '') : showContent(item.url, item.description))}
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </section>
            </>)
    }
}

export default News;