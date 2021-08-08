import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './FilterContact.module.css';
import { phonebookActions, phonebookSelector } from '../../redux/phonebook';


export default function FilterContact() {
    const dispatch = useDispatch();
    const onChange = (event) => dispatch(phonebookActions.changeFilter(event.target.value))
    const value = useSelector(phonebookSelector.getValue)

    return (
        <div className={styles.section}>
            <label className={styles.lable}>
                Finde contact by name
                <br />
                <input type='text' value={value} onChange={onChange} className={styles.filters} />
            </label>
        </div>
    )
}