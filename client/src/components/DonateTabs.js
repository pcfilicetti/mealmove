import React from 'react';
import API from '../utils/API';

import EstEstablishment from './EstEstablishment';
import EstDriver from './EstDriver';
import DriEstablishment from './DriEstablishment';
import DriDriver from './DriDriver';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import PasswordInput from 'grommet/components/PasswordInput';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';

class DonateTabs extends React.Component {
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
        weekDay: 'Sunday',
        time: '',
        vehicleMake: '',
        vehicleModel: '',
        driverLicenseId: '',
        licensePlate: '',
        loggedIn: false,
        viewType: '',
        currentUser: {},
        pickups: []
    };

    logout = () => {
        this.setState({
            loggedIn: false
        });
    }

    componentDidMount() {
        this.logout();
        this.loadPickups();
    }

    login = (type) => {
        if (type === 'e') {
            this.setState({
                loggedIn: true,
                viewType: type,
                currentUser: {
                    establishment: this.state.establishment,
                    email: this.state.email,
                    phone: this.state.phone,
                    emailPref: this.state.emailPref,
                    phonePref: this.state.phonePref,
                    address: this.state.address,
                    foodType: this.state.foodType
                }
            });
            this.setState({
                establishment: '',
                fullName: '',
                email: '',
                password: '',
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
                licensePlate: ''
            });
        } else if (type === 'd') {
            this.setState({
                loggedIn: true,
                viewType: type,
                currentUser: {
                    fullName: this.state.fullName,
                    email: this.state.email,
                    phone: this.state.phone,
                    emailPref: this.state.emailPref,
                    phonePref: this.state.phonePref,
                    driverLicenseId: this.state.driverLicenseId,
                    vehicleMake: this.state.vehicleMake,
                    vehicleModel: this.state.vehicleModel,
                    licensePlate: this.state.licensePlate
                }
            });
            this.setState({
                establishment: '',
                fullName: '',
                email: '',
                password: '',
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
                licensePlate: ''
            })
        }
    };

    loadPickups = () => {
        API.getPickups()
            .then(res => {
                this.setState({ pickups: res.data })
            })
            .catch(err => console.log(err));
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
        if (this.state.establishment && this.state.email && this.state.password && this.state.phone && (this.state.emailPref || this.state.phonePref) && this.state.address && this.state.foodType) {
        API.saveUser({
            establishment: this.state.establishment,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
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

    updateDayTime = (day, time) => {
        this.setState({
            weekDay: day,
            time: time
        });
        this.handlePickupSubmit();
    }

    handleDriverSubmit = (event) => {
        event.preventDefault();
        if (this.state.fullName && this.state.email && this.state.password && this.state.phone && (this.state.emailPref || this.state.phonePref) && this.state.vehicleMake && this.state.vehicleModel && this.state.licensePlate) {
        API.saveUser({
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            emailPref: this.state.emailPref,
            phonePref: this.state.phonePref,
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
            <Section pad='large' >
                <Heading margin='medium' justify='center' align='center' size="medium" uppercase={true} strong={true}>HELP US HELP OUR COMMUNITY</Heading>
                <Box direction='row' justify='center' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-2' onFocus={this.handleClick} flex={true}>
                    <Tabs>
                        <Tab title='Donate Food'>
                            <Box direction='row' justify='center' align='center' wrap={true} pad='medium' margin='small'>
                                <Box wrap={false} margin='large' pad='large'>
                                    <Paragraph size='medium'>
                                        Are you a part of a restaurant group, bakery, supermarket, grocery store, farm, or any other business with excess food? YOUR COMMUNITY NEEDS YOUR HELP!
                                        <br/><br/>
                                        We are looking for businesses to help by giving unsellable but consumable food to those in need.
                                        Instead of throwing out food waste, your business could sign up with MealMove and send it with us to local food banks.
                                        <br/><br/>
                                        We will organize the pickups, you just need to select the time and days of the week that are most convenient for your crew.
                                    </Paragraph>
                                </Box>
                                <Box wrap={false} margin='small'>
                                    {this.state.loggedIn ? (
                                        this.state.viewType === 'e' ? (
                                            <EstEstablishment updateParent={this.updateDayTime} currentUser={this.state.currentUser} />
                                        ) : (
                                            <DriEstablishment onClick={this.logout} />
                                        )
                                    ) : (
                                        <Form onSubmit={this.handleEstablishmentSubmit}>
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
                                                <TextInput name='phone' onDOMChange={this.handleFormChange} value={this.state.phone} />
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
                                    )}
                                </Box>
                            </Box>
                        </Tab>

                        <Tab title='Donate Time'>
                            <Box direction='row' justify='center' align='center' wrap={true} pad='medium' margin='small'>
                                <Box wrap={false} margin='large' pad='large'>
                                    <Paragraph size='medium'>
                                        Are you looking for a way to help your neighbors and build volunteer hours? YOUR COMMUNITY NEEDS YOUR HELP!
                                        <br/><br/>
                                        If you have a clean driving record and valid drivers license please sign up to help pick up boxes of food from participating businesses and dropping off at designated food banks.
                                        <br/><br/>
                                        If you don't drive, don't worry! You can help us sort food and organize pickups.
                                        <br/><br/>
                                        Sign up with your available days and we will contact you.
                                    </Paragraph>
                                </Box>
                                <Box wrap={false} margin='small'>
                                    {this.state.loggedIn ? (
                                        this.state.viewType === 'e' ? (
                                            <EstDriver onClick={this.logout} />
                                        ) : (
                                            <DriDriver pickups={this.state.pickups} />
                                        )
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
                                                <TextInput name='phone' onDOMChange={this.handleFormChange} value={this.state.phone} />
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
                                            <FormField label='License Plate'>
                                                <TextInput name='licensePlate' onDOMChange={this.handleFormChange} value={this.state.licensePlate} />
                                            </FormField>
                                            <br />
                                            <Button type='submit' icon={<CheckmarkIcon />} label='Sign Up!' onClick={this.handleDriverSubmit} plain={false} accent={true} />
                                        </Form>
                                    )}
                                </Box>
                            </Box>
                        </Tab>

                        <Tab title='Donate Money'>
                            <Box direction='column' justify='center' align='center' wrap={true} pad='medium' margin='small'>
                                <Box wrap={false} margin='small' pad='small'>
                                    <Paragraph>
                                        Are you looking for a way to help out your community without physically having to do any work? Look no further! YOUR COMMUNITY NEEDS YOUR HELP!
                                        <br></br><br></br>
                                        Here at MealMove, you have the ability to donate money to our organization.  We are looking for any amount of donation that can help the organization grow.  The money would be used to help pay the pickup costs and website fee.  As part of the pickup costs, custom boxes will be made that will contain the packaged, donated food.
                                    </Paragraph>
                                </Box>
                                <Box wrap={false} margin='none' pad='none'>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="WYQZD9KYZ3FL6" />
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                    <img alt="donate button" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </Box>
                            </Box>
                        </Tab>
                    </Tabs>
                </Box>
            </Section>
        );
    }
}

export default DonateTabs;