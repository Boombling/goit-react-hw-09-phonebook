import React, { useState,  useCallback } from 'react';
import shortid from 'shortid';
import styles from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook';

export default function PhoneBook() {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();


    const handleNameChange = useCallback(e => {
        setName(e.currentTarget.value)
    }, [])
    const handleNumberChange = useCallback(e => {
        setNumber(e.currentTarget.value)
    }, [])

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(phonebookOperations.submit({ id: shortid.generate(), name, number }))

        reset();
    };

    const reset = () => {
        setName('')
        setNumber('')
    }
        return (
            <div className={styles.section}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor={nameInputId} className={styles.lable} >
                        Name
                        <br/>
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            value={name}
                            onChange={handleNameChange}
                            id={nameInputId}
                            className={styles.input}
                        />
                    </label>
                    <label htmlFor={numberInputId} className={styles.lable}>
                        Number
                        <br/>
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            value={number}
                            onChange={handleNumberChange}
                            id={numberInputId}
                            className={styles.input}
                        />
                    </label>
                    <button type="submit" className={styles.btn}>Add contact</button>
                </form>
            </div>
        )
}