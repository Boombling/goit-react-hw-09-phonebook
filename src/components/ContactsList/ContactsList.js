import React from 'react';
import styles from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelector, phonebookOperations } from '../../redux/phonebook';

export default function ContactList() {
    const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(phonebookOperations.deletedContact(id));
    const contactList = useSelector(phonebookSelector.getVisibleContact);
    return (
        <>
            <ul className={styles.list}>
                {contactList.map(({ name, number, id }) => (
                    <li key={id} className={styles.item}>
                        {name}: {number}{' '}
                        <button onClick={() => onDeleteContact(id)} className={styles.btn}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}