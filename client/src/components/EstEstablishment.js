import React from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';

import API from '../utils/API';

class EstEstablishment extends React.Component {
    state = {
        weekDay: 'Sunday',
        time: ''
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

    handlePickupSubmit = (event) => {
        event.preventDefault();
        if (this.props.currentUser.establishment && this.props.currentUser.email && this.props.currentUser.phone && (this.props.currentUser.emailPref || this.props.currentUser.phonePref) && this.props.currentUser.address && this.props.currentUser.foodType && this.state.weekDay && this.state.time) {
            API.savePickup({
                establishment: this.props.currentUser.establishment,
                email: this.props.currentUser.email,
                phone: this.props.currentUser.phone,
                emailPref: this.props.currentUser.emailPref,
                phonePref: this.props.currentUser.phonePref,
                address: this.props.currentUser.address,
                foodType: this.props.currentUser.foodType,
                weekDay: this.state.weekDay,
                time: this.state.time
            })
                .then(res => alert("Pickup Scheduled!"))
                .catch(err => alert(err));
                console.log('should have posted');
        } else {
            alert("something fucked up");
        }
    };

    render() {
        return <Form onSubmit={this.handlePickupSubmit}>
            <FormField label='Week Day for Pickup'>
                <select id='weekDay' value={this.state.weekDay} onChange={this.handleSelectChange}>
                    <option defaultValue value='Sunday'>Sunday</option>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                </select>
            </FormField>
            <FormField label='Time for Pickup (24-Hour Clock)'>
                <TextInput name='time' value={this.state.time} onDOMChange={this.handleFormChange} placeHolder='00:00' />
            </FormField>
            <br />
            <Button type='submit' icon={<CheckmarkIcon />} label='Submit Pickup' onClick={this.handlePickupSubmit} plain={false} accent={true} />
        </Form>
    }
};

export default EstEstablishment;