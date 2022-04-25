import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import debounce from 'lodash.debounce'
import searchIcon from '../../../assets/images/search.png'
import crossIcon from '../../../assets/images/close.png'
import styles from './SearchUserInput.module.css'

const SearchUserInput: FC<TProps> = ({ setSearchTerm, setCurrentPage, searchTerm }) => {
    const [value, setValue] = useState(searchTerm)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e?.target?.value
        setValue(value)
        debounceHandle(value)
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setValue('')
        setSearchTerm('')
        setCurrentPage(1)
    }
    const handleDebounce = (value: string) => {
        setSearchTerm(value)
        setCurrentPage(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceHandle = useCallback(debounce(value => handleDebounce(value), 500), [setSearchTerm])
    return (
        <form className={styles.form}>
            <label htmlFor='input' className={styles.label}>
                <img src={searchIcon} alt="Поиск" width='20px' />
            </label>
            <input type='text' className={styles.input} placeholder='Поиск по имени' value={value} onChange={handleChange} />
            {value.length !== 0
                && <button type='button' onClick={handleClick} className={styles.button}>
                    <img src={crossIcon} alt="" width='20px' />
                </button>
            }
        </form>
    )
}

export default SearchUserInput


type TProps = {
    setSearchTerm: (term: string) => void
    setCurrentPage: (number: number) => void
    searchTerm: string
}
