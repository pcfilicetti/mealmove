import React from 'react';
import API from '../utils/API';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';

class SignUpForm extends React.Component {
    state = {
        establishment: '',
        fullName: '',
        email: '',
        phone: '',
        emailPref: false,
        phonePref: false,
        address: '',
        foodType: 'Prepared Foods',
        weekDay: 'Sunday',
        time: '',
        vehicleMake: '',
        vehicleModel: '',
        driverLicenseId: '',
        driverPhone: '',
        delivered: false
    };

    handleFormChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSelectChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    };

    handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        this.setState({
            [name]: checked
        });
    };

    handleEstablishmentSubmit = (event) => {
        event.preventDefault();
        if (this.state.establishment && this.state.email && this.state.phoneNumber && (this.state.emailPref || this.state.phonePref) && this.state.address && this.state.foodType && this.state.weekDay && this.state.time) {
        API.savePickup({
            establishment: this.state.establishment,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            emailPref: this.state.emailPref,
            phonePref: this.state.phonePref,
            address: this.state.address,
            foodType: this.state.foodType,
            weekDay: this.state.weekDay,
            time: this.state.time
        })
            .then(res => this.loadPickups())
            .catch(err => console.log(err));
            console.log('should have posted');
        }
    };

    handlePickupSubmit = (event) => {
        event.preventDefault();
        if (this.state.establishment && this.state.email && this.state.phoneNumber && (this.state.emailPref || this.state.phonePref) && this.state.address && this.state.foodType && this.state.weekDay && this.state.time) {
        API.savePickup({
            establishment: this.state.establishment,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            emailPref: this.state.emailPref,
            phonePref: this.state.phonePref,
            address: this.state.address,
            foodType: this.state.foodType,
            weekDay: this.state.weekDay,
            time: this.state.time
        })
            .then(res => this.loadPickups())
            .catch(err => console.log(err));
            console.log('should have posted');
        }
    };

    handleDriverSubmit = (event) => {
        event.preventDefault();
        if (this.state.establishment && this.state.email && this.state.phoneNumber && (this.state.emailPref || this.state.phonePref) && this.state.address && this.state.foodType && this.state.weekDay && this.state.time) {
        API.savePickup({
            establishment: this.state.establishment,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            emailPref: this.state.emailPref,
            phonePref: this.state.phonePref,
            address: this.state.address,
            foodType: this.state.foodType,
            weekDay: this.state.weekDay,
            time: this.state.time
        })
            .then(res => this.loadPickups())
            .catch(err => console.log(err));
            console.log('should have posted');
        }
    };
}