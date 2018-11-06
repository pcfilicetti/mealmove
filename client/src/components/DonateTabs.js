import React from 'react';
import API from '../utils/API';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

class DonateTabs extends React.Component {
    state = {
        establishment: '',
        email: '',
        phoneNumber: '',
        emailPref: false,
        phonePref: false,
        address: '',
        foodType: 'Prepared Foods',
        weekDay: 'Sunday',
        time: '',
        driverLicenseId: '',
        driverPhone: '',
        delivered: false,
        pickups: []
    };

    componentDidMount() {
        this.loadPickups();
    };

    loadPickups = () => {
        API.getPickups()
            .then(res => {
                this.setState({ pickups: res.data })
            })
            .catch(err => console.log(err));
    };

    checkContact = (item) => {
        if (item.emailPref && item.phonePref) {
            return `${item.establishment}'s Contact Information: ${item.email} OR ${item.phoneNumber}`;
        } else if (item.emailPref) {
            return `${item.establishment}'s Email: ${item.email}`;
        } else if (item.phonePref) {
            return `${item.establishment}'s Phone Number: ${item.phoneNumber}`;
        } else {
            return `${item.establishment} did not provide contact information...`
        }
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

    handleSubmit = (event) => {
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
        console.log(this.state)
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
                                        Instead of throwing out food waste, your business could sign up with Replate and send it with us to local food banks.
                                        <br/><br/>
                                        We will organize the pickups, you just need to select the time and days of the week that are most convenient for your crew.
                                    </Paragraph>
                                </Box>
                                <Box wrap={false} margin='small'>
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormField label='Establishment Name'>
                                            <TextInput name='establishment' onDOMChange={this.handleFormChange} value={this.state.establishment} />
                                        </FormField>
                                        <FormField label='Email Address'>
                                            <TextInput name='email' onDOMChange={this.handleFormChange} value={this.state.email} />
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
                                            <TextInput name='time' value={this.state.time} onDOMChange={this.handleFormChange} />
                                        </FormField>
                                        <br />
                                        <Button type='submit' icon={<CheckmarkIcon />} label='Submit Pickup' onClick={this.handleSubmit} plain={false} accent={true} />
                                    </Form>
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
                                    {this.state.pickups.length ? (
                                        <List>
                                            {this.state.pickups.map(pickup => (
                                            <ListItem key={pickup._id}>
                                                {pickup.establishment}: {pickup.weekDay}s at {pickup.time}. {this.checkContact(pickup)}
                                            </ListItem>
                                            ))}
                                        </List>
                                    ) : (
                                        <h3>No Results to Display</h3>
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
                                        Here at Replate, you have the ability to donate money to our organization.  We are looking for any amount of donation that can help the organization grow.  The money would be used to help pay the pickup costs and website fee.  As part of the pickup costs, custom boxes will be made that will contain the packaged, donated food.
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