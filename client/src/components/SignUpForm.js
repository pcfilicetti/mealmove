import React from 'react';
import API from '../utils/API';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import PasswordInput from 'grommet/components/PasswordInput';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';

class SignUpForm extends React.Component {
    state = {
        establishment: '',
        fullName: '',
        email: '',
        password: '',
        phone: '',
        emailPref: false,
        phonePref: false,
        address: '',
        foodType: 'Prepared Foods',
        // weekDay: 'Sunday',
        // time: '',
        vehicleMake: '',
        vehicleModel: '',
        driverLicenseId: '',
        licensePlate: '',
        delivered: false,
        loggedIn: false,
        viewType: ''
    };

    // *TO DO* use this.state.viewType to affect establishment and driver views differently
    // Establishments really just need to see pickups associated with their business (in order to update, delete, etc.) and the form to create a pickup
    // Drivers need to see nearby pickups and nothing else (I think)

    componentDidMount() {
        this.login('n');
    }

    login = (type) => {
        this.setState({
            loggedIn: true,
            viewType: type
        });
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
        if (this.state.establishment && this.state.email && this.state.password && this.state.phoneNumber && (this.state.emailPref || this.state.phonePref) && this.state.address && this.state.foodType) {
        API.saveEstablishment({
            establishment: this.state.establishment,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            emailPref: this.state.emailPref,
            phonePref: this.state.phonePref,
            address: this.state.address,
            foodType: this.state.foodType
        })
            .then(res => this.login('e'))
            .catch(err => console.log(err));
        } else if (!(this.state.emailPref || this.state.phonePref)) {
            alert("Please select the best means of communication.");
        } else {
            alert("Please fill out all form fields.");
        }
    };

    // handlePickupSubmit = (event) => {
    //     event.preventDefault();
    //     if (this.state.establishment && this.state.email && this.state.phoneNumber && (this.state.emailPref || this.state.phonePref) && this.state.address && this.state.foodType && this.state.weekDay && this.state.time) {
    //     API.savePickup({
    //         establishment: this.state.establishment,
    //         email: this.state.email,
    //         phoneNumber: this.state.phoneNumber,
    //         emailPref: this.state.emailPref,
    //         phonePref: this.state.phonePref,
    //         address: this.state.address,
    //         foodType: this.state.foodType,
    //         weekDay: this.state.weekDay,
    //         time: this.state.time
    //     })
    //         .then(res => this.loadPickups())
    //         .catch(err => console.log(err));
    //         console.log('should have posted');
    //     }
    // };

    handleDriverSubmit = (event) => {
        event.preventDefault();
        if (this.state.fullName && this.state.email && this.state.password && this.state.phoneNumber && (this.state.emailPref || this.state.phonePref) && this.state.driverLicenseId && this.state.vehicleMake && this.state.vehicleModel && this.state.licensePlate) {
        API.saveDriver({
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            emailPref: this.state.emailPref,
            phonePref: this.state.phonePref,
            driverLicenseId: this.state.driverLicenseId,
            vehicleMake: this.state.vehicleMake,
            vehicleModel: this.state.vehicleModel,
            licensePlate: this.state.licensePlate
        })
            .then(res => this.login('d'))
            .catch(err => console.log(err));
        } else if (!(this.state.emailPref || this.state.phonePref)) {
            alert("Please select the best means of communication.");
        } else {
            alert("Please fill out all form fields.");
        }
    };

    render() {
        return (
            <div>
                { this.props.type === 'establishment' ? 
                    (<Form onSubmit={this.handleEstablishmentSubmit}>
                        <FormField label='Establishment Name'>
                            <TextInput name='establishment' onDOMChange={this.handleFormChange} value={this.state.establishment} />
                        </FormField>
                        <FormField label='Email Address'>
                            <TextInput name='email' onDOMChange={this.handleFormChange} value={this.state.email} />
                        </FormField>
                        <FormField label='Password'>
                            <PasswordInput name='password' onChange={this.handleFormChange} value={this.state.password} />    
                        </FormField>
                        <FormField label='Phone Number'>
                            <TextInput name='phoneNumber' onDOMChange={this.handleFormChange} value={this.state.phoneNumber} />
                        </FormField>
                        <FormField label='Best Means of Communication'>
                            <CheckBox name='emailPref' onChange={this.handleCheckboxChange} label='Email' checked={this.state.emailPref} />
                            <CheckBox name='phonePref' onChange={this.handleCheckboxChange} label='Phone' checked={this.state.phonePref} />
                        </FormField>
                        <FormField label='Establishment Address'>
                            <TextInput name='address' onDOMChange={this.handleFormChange} value={this.state.address} />
                        </FormField>
                        <FormField label='Food Type'>
                            <select id='foodType' value={this.state.foodType} onChange={this.handleSelectChange}>
                                <option defaultValue value='Prepared Foods'>Prepared Foods</option>
                                <option value='Non-Perishable'>Non-Perishable</option>
                                <option value='Semi-Perishable'>Semi-Perishable</option>
                                <option value='Perishable'>Perishable</option>
                            </select>
                        </FormField>
                        <br />
                        <Button type='submit' icon={<CheckmarkIcon />} label='Sign Up!' onClick={this.handleEstablishmentSubmit} plain={false} accent={true} />
                    </Form>
                    ) : (
                    <Form onSubmit={this.handleDriverSubmit}>
                        <FormField label='Full Name'>
                            <TextInput name='fullName' onDOMChange={this.handleFormChange} value={this.state.fullName} />
                        </FormField>
                        <FormField label='Email Address'>
                            <TextInput name='email' onDOMChange={this.handleFormChange} value={this.state.email} />
                        </FormField>
                        <FormField label='Password'>
                            <PasswordInput name='password' onChange={this.handleFormChange} value={this.state.password} />    
                        </FormField>
                        <FormField label='Phone Number'>
                            <TextInput name='phoneNumber' onDOMChange={this.handleFormChange} value={this.state.phoneNumber} />
                        </FormField>
                        <FormField label='Best Means of Communication'>
                            <CheckBox name='emailPref' onChange={this.handleCheckboxChange} label='Email' checked={this.state.emailPref} />
                            <CheckBox name='phonePref' onChange={this.handleCheckboxChange} label='Phone' checked={this.state.phonePref} />
                        </FormField>
                        <FormField label='Vehicle Make'>
                            <TextInput name='vehicleMake' onDOMChange={this.handleFormChange} value={this.state.vehicleMake} />
                        </FormField>
                        <FormField label='Vehicle Model'>
                            <TextInput name='vehicleModel' onDOMChange={this.handleFormChange} value={this.state.vehicleModel} />
                        </FormField>
                        <FormField label="Driver's License ID">
                            <TextInput name='driverLicenseId' onDOMChange={this.handleFormChange} value={this.state.driverLicenseId} />
                        </FormField>
                        <FormField label='License Plate'>
                            <TextInput name='licensePlate' onDOMChange={this.handleFormChange} value={this.state.licensePlate} />
                        </FormField>
                        <br />
                        <Button type='submit' icon={<CheckmarkIcon />} label='Sign Up!' onClick={this.handleDriverSubmit} plain={false} accent={true} />
                    </Form>
                    )
                }
            </div>
        );
    }
}

export default SignUpForm;