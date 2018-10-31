import Article from 'grommet/components/Article';
// import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
// import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
// import Form from 'grommet/components/Form';
// import FormField from 'grommet/components/FormField';
// import LoginForm from 'grommet/components/LoginForm';
// import Select from 'grommet/components/Select';
// import RadioButton from 'grommet/components/RadioButton';
// import Button from 'grommet/components/Button';
// import Header from 'grommet/components/Header';
// import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter';
// import App from 'grommet/components/App';
// import Title from 'grommet/components/Title';
// import Menu from 'grommet/components/Menu';
// import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
// import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Paragraph from 'grommet/components/Paragraph';
import Label from 'grommet/components/Label';



import React, { Component } from "react";
// import API from "../../utils/API";
<style>
    
</style>
class Replate extends Component {
    
    state = {};


    render () {
        return (
            <div>
            <Article scrollStep={false}>
            {/* hero page */}
                <Hero background={<Image src="https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    fit='cover'
                    full={true} />}
                    backgroundColorIndex='light'
                    size="large">
                    <Headline margin='none' align="center" size="xlarge" uppercase={true} truncate={true} strong={true}>
                        REPLATE
                    </Headline>
                    <Box direction='row'
                        justify='center'
                        align='center'>
                    <Box basis='1/2'
                        align='end'
                        pad='medium' />
                    <Box basis='1/2'
                        align='start'
                        pad='medium'>
                    </Box>
                    </Box>  
                </Hero>

        {/* how this works section */}
            <Section pad='large'
                justify='center'
                align='center'
                colorIndex='grey-4'>
                <Heading margin='none' align="start" size="medium" uppercase={true} truncate={true} strong={true}>
                HOW THIS WORKS
                </Heading>
                <Paragraph align="center" size="large">
                    How can we waste less food and feed more people?
                </Paragraph>
                <Box direction="row" justify="start" align="center" wrap={true} pad="small" margin="small">
                <Box direction="row" wrap={false}>
                <Meter 
                    id='landfillMeter'
                    type='circle'
                    value={21}
                    activeIndex={0}
                    onActive={function (index){}}
                    label={<Value value={21} units='%' size="medium" />}
                    size=""/>
                <Label labelFor='#landfillMeter' size="medium" > of landfill volume is food waste </Label>
                </Box>
                
                <Box direction="row" wrap={false}>
                <Meter 
                    id='lbFoodMeter'
                    type='circle'
                    value={72}
                    activeIndex={0}
                    onActive={function (index){}}
                    label={<Value value={72} units='Billion' size="small" />}
                    size=""/>
                <Label labelFor='#landfillMeter' size="medium"> pounds of food is wasted each year </Label>
                </Box>
                
                <Box direction="row" wrap={false}>
                <Meter 
                    id='moneyMeter'
                    type='circle'
                    value={1}
                    max={3}
                    activeIndex={0}
                    onActive={function (index){}}
                    label={<Value value={1} units='in 3' size="medium" />}
                    size=""/>
                <Label labelFor='#landfillMeter' size="medium"> residents in Washington, D.C. is at risk of hunger.  </Label>
                </Box>
                
                </Box>
                <div id="aboutText" >
                    Replate aims to connect those with excess food to those who are in need. We are targeting restaurants, grocery stores and farms and asking them to donate food that would be thrown out. 
                    Volunters pick up this food and bring it to local food banks.
                </div>
            </Section>
            <Section pad='large'
                justify='center'
                align='center'>
                <Heading margin='none' align="start" size="medium" uppercase={true} truncate={true} strong={true}>
                HELP US HELP OUR COMMUNITY
                </Heading>
            </Section>
            <Section pad='large'
                justify='center'
                align='center'
                colorIndex='grey-4'>
                <Heading margin='none' align="start" size="medium" uppercase={true} truncate={true} strong={true}>
                PARTNERED BUSINESSES
                </Heading>
            </Section>
 
            </Article>






            </div>
        );
    }

}

export default Replate;