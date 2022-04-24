import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import debounce from 'lodash.debounce'
import searchIcon from '../../../assets/images/search.png'
import crossIcon from '../../../assets/images/close.png'
import styles from './SearchUserInput.module.css'

const SearchUserInput: FC<TProps> = ({ searchUser }) => {
    const [value, setValue] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e?.target?.value
        setValue(value)
        debounceHandle(value)
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setValue('')
        searchUser('')
    }
    const debounceHandle = useCallback(debounce(value => searchUser(value), 500), [searchUser])
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
    searchUser: (value: string) => void
}