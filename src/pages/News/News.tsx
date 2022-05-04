import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TNews } from "../../api/newsAPI";
import newspaper from "../../assets/images/newspaper.png";
import { UpButton } from "../../components/common/UpButton/UpButton";
import { actionCreators } from "../../store/reducers/newsReducer";
import styles from "./News.module.css";

const News: FC<TProps> = ({ news, hasContent, getContent }) => {
    const dispatch = useDispatch()
    const scrollHandler = (e: any ) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            dispatch(actionCreators.setScrollFetching(true))
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const showContent = (content: string) => {
        return (
            <p>{content}</p>
        )
    }

    const toggleContent = (id: string, content: string, text: string) => {
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
                        <a key={item.link} href={item.link} className={styles.link} target='_blank' rel='noreferrer'>
                            {/* <div className={styles.imgDiv}> */}
                            <img src={item.image_url || newspaper} alt="news" className={styles.img} />
                            {/* </div> */}
                            <div className={styles.textDiv}>
                                <p className={styles.phrase}>{item.title}</p>
                                <span className={styles.calendarData}>{item.pubDate}</span>
                                <div className={styles.content}>
                                    {item.description !== null && (!hasContent.includes(item.link)
                                        ? toggleContent(item.link, '', 'Показать')
                                        : toggleContent(item.link, item.description, 'Убрать'))}
                                        
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


type TProps = {
    news: TNews[]
    hasContent: string[]
    getContent: (id: string) => void
}