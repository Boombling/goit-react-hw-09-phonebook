import React, {useEffect} from 'react';
import PhoneBook from '../components/Phonebook/Phonebook';
import ContactList from '../components/ContactsList/ContactsList';
import FilterContact from '../components/FilterContact/FilterContact';
import { useDispatch } from "react-redux";
import '../App.css';
import { phonebookOperations } from '../redux/phonebook';

export default function App (){
  const dispatch = useDispatch();
  useEffect(() => { dispatch(phonebookOperations.fetchContacts()) }, [dispatch])

    return (
      <div>
        <h1 className='title'>PhoneBook</h1>
        <PhoneBook />
        <h2 className='title'>Contacts</h2>
        <FilterContact />
        <ContactList  />
      </div>
    )
}