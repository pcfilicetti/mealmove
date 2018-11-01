import Article from 'grommet/components/Article';
// import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
// import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import Meter from 'grommet/components/Meter';
// import App from 'grommet/components/App';
// import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Value from 'grommet/components/Value';
import DateTime from 'grommet/components/DateTime';
// import Card from 'grommet/components/Card';
import Paragraph from 'grommet/components/Paragraph';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Label from 'grommet/components/Label';
import CafeteriaIcon from 'grommet/components/icons/base/Cafeteria';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';
import CarIcon from 'grommet/components/icons/base/Car';
import GroupIcon from 'grommet/components/icons/base/Group';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import SocialShare from 'grommet/components/SocialShare';
import Carousel from 'grommet/components/Carousel';
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';



import React, { Component } from "react";

// import API from "../../utils/API";

class Replate extends Component {
    state = {
        establishment: '',
        email: '',
        phoneNumber: '',
        emailPref: false,
        phonePref: false,
        address: '',
        foodType: '',
        weekDay: '',
        time: '',
        driverLicenseId: '',
        driverPhone: '',
        delivered: false
    };

    handleClick = (event) => {
        event.preventDefault();
    };

    handleFormChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
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
    }

    render () {
        return (
            <div>
                <Article scrollStep={false}>


                    {/* hero page */}
                    <Hero background={<Image src="https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" fit='cover' full={true} />} backgroundColorIndex='light' size="large">
                        <Headline margin='none' align="center" size="large" uppercase='true' truncate='true'>REPLATE</Headline>
                        <Box direction='row' justify='center' align='center'>
                            <Box basis='1/2' align='end' pad='medium' />
                            <Box basis='1/2' align='start' pad='medium'>
                            </Box>
                        </Box>  
                    </Hero>



                    {/* how this works section */}
                    <Section pad='large' justify="center" align="center" colorIndex='grey-4'>
                        <Heading margin='large' align="center" size="medium" strong={true}>How can we waste less food and feed more people?</Heading>
                        <Box direction="row" justify="center" align="center" wrap={true} pad="small" margin="small">
                            <Box direction="row" wrap={false}>
                                <Meter id='landfillMeter' type='circle' value={21} activeIndex={0} onActive={function (index){}} label={<Value value={21} units='%' size="medium" />} size="small"/>
                                <Label labelFor='#landfillMeter' size="medium" > of landfill volume is food waste.</Label>
                            </Box>
                            
                            <Box direction="row" wrap={false}>
                                <Meter id='lbFoodMeter' type='circle' value={72} activeIndex={0} onActive={function (index){}} label={<Value value={72} units='Billion' size="small" />} size="small"/>
                                <Label labelFor='#landfillMeter' size="medium"> pounds of food are wasted each year.</Label>
                            </Box>
                        
                            <Box direction="row" wrap={false}>
                                <Meter id='moneyMeter' type='circle' value={1} max={3} activeIndex={0} onActive={function (index){}} label={<Value value={1} units='in 3' size="medium" />} size="small"/>
                                <Label labelFor='#landfillMeter' size="medium"> residents in Washington, D.C. is at risk of hunger.</Label>
                            </Box>
                        
                        </Box>
                        <div id="aboutText" truncate='true'>
                           America has more than enough food to feed everyone. $218 billion worth of food is thrown away each year excluding 52 billion pounds of food from grocery stores, restaurants and manufacturers. 
                        </div>
                        <div id="aboutText" truncate='true'>
                        National food industry, government agencies, environmental organizations agree to reducing food waste as a top priority for protecting the environment as astounding 21% of landfill volume is food waste.
                        </div>
                        <div id="aboutText" truncate='true'>
                            Replate aims to connect those with excess food to those who are in need. We are targeting restaurants, grocery stores and farms and asking them to donate food that would be thrown out. 
                            Volunters pick up this food and bring it to local food banks.
                            <br></br><br></br><br></br>
                        </div>
                        

                        <Box direction='row'>
                             <CafeteriaIcon pad='medium' margin='small'color='brand' size='xlarge'/> 
                             <FormNextLinkIcon pad='medium' margin='small' color= 'plain' size ='xlarge'/> 
                             <CarIcon pad='medium' margin='small' color= 'plain' size ='xlarge'/>
                             <FormNextLinkIcon pad='medium' margin='small' color= 'plain' size ='xlarge'/>
                             <GroupIcon pad='medium' margin='small' color= 'plain' size ='xlarge'/>
                        </Box>
                    </Section>



                    {/* signup form section */}
                    <Section pad='large' >
                        <Heading margin='medium' justify='center' align='center' size="medium" uppercase={true} strong={true}>HELP US HELP OUR COMMUNITY</Heading>
                        <Box direction='row' justify='center' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-2' onClick={this.setState} onFocus={this.handleClick} flex={true}>
                            <Tabs>

                                {/* TAB 1: DONATE FOOD */}
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
                                                    <TextInput name='emailAddress' onDOMChange={this.handleFormChange} value={this.state.emailAddress} />
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
                                                    <select name='foodType' value={this.state.foodType} onChange={this.handleFormChange}>
                                                        <option selected disabled>Select a food type...</option>
                                                        <option value='Prepared Foods'>Prepared Foods</option>
                                                        <option value='Non-Perishable'>Non-Perishable</option>
                                                        <option value='Semi-Perishable'>Semi-Perishable</option>
                                                        <option value='Perishable'>Perishable</option>
                                                    </select>
                                                </FormField>
                                                <FormField label='Week Day for Pickup'>
                                                    <select name='weekDay' value={this.state.weekDay} onChange={this.handleFormChange}>
                                                        <option selected disabled>Select a week day...</option>
                                                        <option value='Sunday'>Sunday</option>
                                                        <option value='Monday'>Monday</option>
                                                        <option value='Tuesday'>Tuesday</option>
                                                        <option value='Wednesday'>Wednesday</option>
                                                        <option value='Thursday'>Thursday</option>
                                                        <option value='Friday'>Friday</option>
                                                        <option value='Saturday'>Saturday</option>
                                                    </select>
                                                </FormField>
                                                <FormField label='Time for Pickup (24-Hour Clock)'>
                                                    <DateTime name='time' value={this.state.time} format='HH:mm' onDOMChange={this.handleFormChange} />
                                                </FormField>
                                                <br />
                                                <Button type='submit' icon={<CheckmarkIcon />} label='Submit Pickup' onClick={this.handleSubmit} plain={false} accent={true} />
                                            </Form>
                                        </Box>
                                    </Box>
                                </Tab>

                                {/* TAB 2: DONATE TIME */}
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
                                            <Form>
                                                <FormField label='Name'>
                                                    <TextInput />
                                                </FormField>
                                                <FormField label='email'>
                                                    <TextInput />
                                                </FormField>
                                                <FormField label='Phone'>
                                                    <TextInput />
                                                </FormField>
                                            </Form>
                                        </Box>
                                    </Box>
                                </Tab>

                                {/* TAB 3: DONATE MONEY */}
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
                                            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </Box>
                                    </Box>
                                </Tab>
                            </Tabs>
                        </Box>
                    </Section>



                    {/* partnered businesses section */}
                    <Section pad='large' colorIndex='grey-4' align="center" >
                        <Heading margin='medium' align="center" size="medium" uppercase={true} truncate={true} strong={true}>PARTNERED BUSINESSES</Heading>
                        <Paragraph id="aboutText" align="center"><Carousel>
                        <Image src='http://www.natashalandau.net/images/title_good_burger.png'/>
                        <Image src='http://t2.rbxcdn.com/2ca42cc723e65da043f0c98dcddd1b0e'/>
                        <Image src='http://kwikemartonline.com.au/wp-content/uploads/2018/03/final-approved-logo.png'/> 
                       
                        </Carousel></Paragraph>
                        </Section>

<Footer justify='between'
  size='medium'>
  <Title> 
    <s/>
     REPLATE
  </Title>
  <Box direction='row'
    align='center'
    pad={{"between": "large"}}>
    <Paragraph margin='none'>
      © 2018 REPLATE
    </Paragraph>
    <Menu direction='row'
      size='medium'
      dropAlign={{"left": "left"}}>
      <Anchor href='#'>
      <SocialShare link='replateDC@gmail.com'
                    type='email'
                    title='Sample Title'
                    text='Sample text' />
      </Anchor>
      <Anchor href='#'>
      <SocialShare type='facebook'
                    link='https://www.facebook.com/replatefirst.replatelast' />
      </Anchor>

       <Anchor href='#'>
      <SocialInstagramIcon type='instagram'
                   link='https://www.instagram.com/replatedc/'
                   text='Sample text'/>
      </Anchor>

      <Anchor href='#'>
      <SocialShare type='google'
                   link='https://grommet.io' />
      </Anchor>
      <Anchor href='#'>
      <SocialShare type='twitter'
                   link='https://twitter.com/ReplateDC18'
                   text='Sample text' />
      </Anchor>
      <Anchor href='#'>
      <SocialGithubIcon  type='github'
                   link='https://github.com/pcfilicetti/replate/'
                   text='Sample text' />
      </Anchor>
     
    </Menu>
  </Box>
</Footer>

                </Article>
            </div>
        );
    }

}

export default Replate;