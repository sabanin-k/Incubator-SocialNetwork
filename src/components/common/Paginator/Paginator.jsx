import React, { useEffect, useRef, useState } from 'react'
import styles from './Paginator.module.css';

const Paginator = ({ totalCount, pageSize, currentPage, setCurrentPage }) => {
    // const [state, setState] = useState({
    //     isScrolling: false,
    //     clientX: 0,
    //     scrollX: 0
    // })

    let ref = useRef()

    useEffect(() => {
        const elem = ref.current;
        if (elem) {
            const onWheel = event => {
                event.preventDefault()
                elem.scrollTo({
                    left: elem.scrollLeft + event.deltaY * 5,
                    behavior: 'smooth'
                })
            }

            elem.addEventListener('wheel', onWheel)

            return () => elem.removeEventListener('wheel', onWheel)
        }
    }, [])



    let pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCount / (pageSize)); i++) {
        pageNumbers.push(i);
    }

    return (
        <div ref={ref} className={styles.div}
            // onMouseDown={handleMouseDown}
            // onMouseUp={handleMouseUp}
            // onMouseMove={handleMouseMove}
            >
                {console.log('render')}
            {pageNumbers.map((item, i) => {
                return <span key={i} onClick={() => setCurrentPage(item)}
                    className={currentPage === item ? styles.activePage : styles.pageNumber}
                >{item}</span>
            })}
        </div>
    )
}

export default Paginator;









// const checkIsObj = (e) => {
//     if (ref && ref.current && ref.current.contains(e.target)) {
//         return
//     }
//     e.preventDefault()
// }

// const handleMouseDown = (e) => {
//     checkIsObj(e)

//     setState({
//         ...state,
//         isScrolling: true,
//         clientX: e.clientX
//     })
// }

// const handleMouseUp = (e) => {
//     checkIsObj(e)

//     setState({
//         ...state,
//         isScrolling: false
//     })
// }

// const handleMouseMove = (e) => {
//     checkIsObj(e)

//     const { clientX, scrollX, isScrolling } = state;

//     if (isScrolling) {
//         ref.current.scrollLeft = scrollX + e.clientX - clientX
//     }

//     setState({
//         ...state,
//         scrollX: scrollX + e.clientX - clientX,
//         clientX: e.clientX
//     })
// }

// useEffect(() => {
//     document.addEventListener('mousedown', handleMouseDown)
//     document.addEventListener('mouseup', handleMouseUp)
//     document.addEventListener('mousemove', handleMouseMove)

//     return () => {
//         document.removeEventListener('mousedown', handleMouseDown)
//         document.removeEventListener('mouseup', handleMouseUp)
//         document.removeEventListener('mousemove', handleMouseMove)
//     }
// })
