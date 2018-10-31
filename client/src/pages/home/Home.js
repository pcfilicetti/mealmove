import Article from 'grommet/components/Article';
// import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
// import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
// import LoginForm from 'grommet/components/LoginForm';
// import Select from 'grommet/components/Select';
// import RadioButton from 'grommet/components/RadioButton';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter';
// import App from 'grommet/components/App';
// import Menu from 'grommet/components/Menu';
// import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Value from 'grommet/components/Value';
import Card from 'grommet/components/Card';
import Paragraph from 'grommet/components/Paragraph';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Label from 'grommet/components/Label';
import TextInput from 'grommet/components/TextInput';

import React, { Component } from "react";

function handleClick(e){
    e.preventDefault();
}
// import API from "../../utils/API";

class Replate extends Component {
    
    state = {};


    render () {
        return (
            <div>
                <Article scrollStep={false}>
                    {/* hero page */}
                    <Hero background={<Image src="https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" fit='cover' full={true} />} backgroundColorIndex='light' size="large">
                        <Headline margin='none' align="center" size="large" uppercase={true} truncate={true}>REPLATE</Headline>
                        <Box direction='row' justify='center' align='center'>
                            <Box basis='1/2' align='end' pad='medium' />
                            <Box basis='1/2' align='start' pad='medium'>
                            </Box>
                        </Box>  
                    </Hero>

                    {/* how this works section */}
                    <Section pad='large' justify="center" align="center" colorIndex='grey-4'>
                        <Heading  margin='large' align="center" size="medium" strong={true}>How can we waste less food and feed more people?</Heading>
                        <Box direction="row" justify="start" align="center" wrap={true} pad="small" margin="small">
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
                        <div id="aboutText" truncate={true}>
                            Replate aims to connect those with excess food to those who are in need. We are targeting restaurants, grocery stores and farms and asking them to donate food that would be thrown out. 
                            Volunters pick up this food and bring it to local food banks.
                        </div>
                    </Section>

                    {/* signup form section */}
                    <Section pad='large' >
                        <Heading margin='medium' justify='center' align='center' size="medium" uppercase={true} truncate={true} strong={true}>HELP US HELP OUR COMMUNITY</Heading>
                        <Box direction='row' justify='center' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-2' onClick={this.setState} onFocus={handleClick} flex='true'>
                            <Tabs>
                                {/* TAB 1: DONATE FOOD */}
                                <Tab title='Donate Food'>
                                    <Box direction='row' wrap={true}>
                                        <Box>
                                            <Paragraph>This is my dissertation on why Peter is wrong about grommet and boxes.</Paragraph>
                                        </Box>
                                        <Box>
                                        <Form>
                                        <FormField label='Sample label'>
                                            <TextInput />
                                        </FormField>
                                        </Form>
                                        </Box>
                                    </Box>
                                    <input type='text' value='' onChange={handleClick} />
                                </Tab>
                                {/* TAB 2: DONATE TIME */}
                                <Tab title='Donate Time'>
                                    <Paragraph>
                                        <Card label='Donate Time' heading='Sample Heading' description='Sample description providing more details.' />
                                    </Paragraph>
                                    <input type='text' value='' onChange={handleClick} />
                                </Tab>
                                {/* TAB 3: DONATE MONEY */}
                                <Tab title='Donate Money'>
                                    <Paragraph>
                                        <Card label='Donate Money' heading='Sample Heading' description='Sample description providing more details.' />
                                    </Paragraph>
                                    <input type='text' value='' onChange={handleClick} />
                                </Tab>
                            </Tabs>
                        </Box>
                    </Section>

                    {/* partnered businesses section */}
                    <Section pad='large' colorIndex='grey-4' align="center" >
                        <Heading margin='medium' align="center" size="medium" uppercase={true} truncate={true} strong={true}>PARTNERED BUSINESSES</Heading>
                        <Paragraph id="aboutText" align="center"> This is where we feature donating businesses</Paragraph>
                    </Section>
                </Article>
            </div>
        );
    }

}

export default Replate;