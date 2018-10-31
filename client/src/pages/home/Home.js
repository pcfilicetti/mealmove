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
import Button from 'grommet/components/Button';
import ClockIcon from 'grommet/components/icons/base/Clock';
import CurrencyIcon from 'grommet/components/icons/base/Currency';
import RestaurantIcon from 'grommet/components/icons/base/Restaurant';

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
                <Headline margin='none'>
                <Hero background={<Image src="https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    fit='cover'
                    full={true} />}
                    backgroundColorIndex='light'
                    size="large">
                    <Heading margin='none' align="center" size="xlarge" uppercase={true} truncate={true} strong={true}>
                        Replate
                    </Heading>
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
                

<Box direction='row'
  justify='start'
  align='center'
  wrap={true}
  pad='medium'
  margin='small'
  colorIndex='light-2'
  onClick={1}
  onFocus={1}>
  <Value value={1}
    colorIndex='accent-1' />
  <Box direction='row'
    justify='start'
    align='center'
    wrap={true}
    pad='medium'
    margin='small'
    colorIndex='light-1'
    onClick={1}
    onFocus={1}>
    <Value value={2} />
  </Box>
  <Box direction='row'
    justify='start'
    align='center'
    wrap={true}
    pad='medium'
    margin='small'
    colorIndex='light-1'
    onClick={1}
    onFocus={1}>
    <Value value={3} />
  </Box>
  <Box direction='row'
    justify='start'
    align='center'
    wrap={true}
    pad='medium'
    margin='small'
    colorIndex='light-1'
    onClick={1}
    onFocus={1}>
    <Value value={4} />
  </Box>
  <Box direction='row'
    justify='start'
    align='center'
    wrap={true}
    pad='medium'
    margin='small'
    colorIndex='light-1'
    onClick={1}
    onFocus={1}>
    <Value value={5} />
  </Box>
</Box>


                </Headline>
            <Section pad='large' justify='center' align='center' colorIndex='grey-4'>
                <Headline margin='none'>Section 2</Headline>
                <Box direction='row' margin='small' justify='start' align='center' wrap={true} pad='none'>
                    <Button icon={<ClockIcon />}
                    label='Donate Time'
                    onClick={console.log("insert dropdown function here")}
                    href='#' />
                    <Button icon={<RestaurantIcon />}
                    label='Donate Food'
                    onClick={console.log("insert dropdown function here")}
                    href='#' />
                    <Button icon={<CurrencyIcon />}
                    label='Donate Money'
                    onClick={console.log("insert dropdown function here")}
                    href='#' />
                </Box>
            </Section>
            <Section pad='large'
                justify='center'
                align='center'>
                <Headline margin='none'>
                Section 3
                </Headline>
            </Section>
            <Section pad='large'
                justify='center'
                align='center'
                colorIndex='grey-4'>
                <Headline margin='none'>
                Section 4
                </Headline>
            </Section>
            <Section pad='large'
                justify='center'
                align='center'>
                <Headline margin='none'>
                <Box align='center'>
                <Meter type='circle'
                    value={40}
                    activeIndex={0} 
                    onActive={function (index){}}/>
                <Value value={40} units='GB' />
                </Box>


                </Headline>
            </Section>

            
            </Article>






            </div>
        );
    }

}

export default Replate;