import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './Phonebook.module.css';
import { connect } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook';

class PhoneBook extends Component {
    state = {
        // contacts: [],
        name: '',
        number: ''
    }
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({
            id: shortid.generate(),
            [name]: value,
        })
    };

    handleSubmit = evt => {
        evt.preventDefault();
        // console.log(`${this.state}`);
        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' })
    }

    render() {
        const { name, number } = this.state;
        return (
            <div className={styles.section}>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <label htmlFor={this.nameInputId} className={styles.lable} >
                        Name
                        <br/>
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            value={name}
                            onChange={this.handleChange}
                            id={this.nameInputId}
                            className={styles.input}
                        />
                    </label>
                    <label htmlFor={this.numberInputId} className={styles.lable}>
                        Number
                        <br/>
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            value={number}
                            onChange={this.handleChange}
                            id={this.numberInputId}
                            className={styles.input}
                        />
                    </label>
                    <button type="submit" className={styles.btn}>Add contact</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    onSubmit: (contact) => dispatch(phonebookOperations.submit(contact))
})

export default connect(null, mapDispatchToProps)(PhoneBook);