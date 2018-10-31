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
import Title from 'grommet/components/Title';
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





import React, { Component } from "react";

function handleClick(e){
    e.preventDefault();
}
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
  
  onClick={this.setState}
  onFocus={handleClick}
  flex='true'>

  <Tabs>
  <Tab title='Donate Food'>
    <Paragraph>
    <Card 
  label='Donate Food'
  heading='Sample Heading'
  description='Sample description providing more details.' />
    </Paragraph>
    <input type='text'
      value=''
      onChange={handleClick} />
  </Tab>
  <Tab title='Donate Time'>
    <Paragraph>
    <Card 
  label='Donate Time'
  heading='Sample Heading'
  description='Sample description providing more details.' />
    </Paragraph>
    <input type='text'
      value=''
      onChange={handleClick} />
  </Tab>
  <Tab title='Donate Money'>
    <Paragraph>
    <Card 
  label='Donate Money'
  heading='Sample Heading'
  description='Sample description providing more details.' />
    </Paragraph>
    <input type='text'
      value=''
      onChange={handleClick} />
  </Tab>
</Tabs>
  
  
  
</Box>


                </Headline>
            {/* <Section pad='large'
                justify='center'
                align='center'
                colorIndex='grey-4'>
                <Headline margin='none'>
                Section 2
                </Headline>
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
            </Section> */}
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