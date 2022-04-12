import React, { useState } from 'react'
import styles from './Paginator.module.css';

const Paginator = ({ totalCount, pageSize, currentPage, setCurrentPage }) => {

    const PageButton = ({ disableDepend, funcParametr, innerText }) => {
        return (
            <button disabled={disableDepend}
                className={styles.button}
                onClick={() => setPortionNumber(funcParametr)}>{innerText}</button>
        )
    }

    const portionSize = 10;
    const totalPagesCount = Math.ceil(totalCount / pageSize);
    const [portionNumber, setPortionNumber] = useState(1);

    let totalPages = []
    if (totalCount) {
        for (let i = 1; i <= totalPagesCount; i++) {
            totalPages.push(i)
        }
    }

    let leftSidePortionNumber = (portionNumber - 1) * portionSize;
    let rightSidePortionNumber = portionNumber * portionSize;

    return (
        <div>
            <div className={styles.pagesWithButtons}>
                <PageButton disableDepend={portionNumber === 1}
                    funcParametr={portionNumber - 1}
                    innerText='◀' />
                <div className={styles.pageNumbersWrapper}>
                    {totalPages.filter(p => p >= leftSidePortionNumber && p <= rightSidePortionNumber).map((item) => {
                        return <span key={item} onClick={() => setCurrentPage(item)}
                            className={currentPage === item ? styles.activePage : styles.pageNumber}
                        >{item}</span>
                    })}
                </div>
                <PageButton disableDepend={portionNumber === totalPagesCount / portionSize}
                    funcParametr={portionNumber + 1}
                    innerText='▶' />
            </div>
            <div className={styles.buttonsWrapper}>
                    <PageButton disableDepend={portionNumber < 2}
                        funcParametr={1}
                        innerText='Первая' />
                    <PageButton disableDepend={portionNumber === totalPagesCount / portionSize}
                        funcParametr={totalPagesCount / portionSize}
                        innerText='Последняя' />
            </div>
            <div className={styles.inputPageWrapper}>
                <label htmlFor='pageInput' className={styles.label}>Введите страницу</label>
                <input className={styles.input} id="pagesInput" type="number" min={1} onChange={(e) => {
                    if (e.target.value > totalPagesCount) e.target.value = totalPagesCount;
                    if (e.target.value === null || e.target.value < 1) e.target.value = 1;
                    setPortionNumber(Math.ceil(e.target.value / portionSize))
                    setCurrentPage(e.target.value)
                }} />
                <span className={styles.spanTotalPages}> / {totalPagesCount}</span>
            </div>
        </div>
    )
}

export default Paginator;
