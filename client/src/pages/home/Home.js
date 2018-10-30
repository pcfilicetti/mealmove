import Article from 'grommet/components/Article';
// import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
// import Form from 'grommet/components/Form';
// import FormField from 'grommet/components/FormField';
// import LoginForm from 'grommet/components/LoginForm';
// import Select from 'grommet/components/Select';
// import RadioButton from 'grommet/components/RadioButton';
// import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
// import Box from 'grommet/components/Box';



import React, { Component } from "react";
// import API from "../../utils/API";
<style>
    
</style>
class Replate extends Component {
    
    state = {};


    render () {
        return (
            <App>
       <Article scrollStep={false}>
  <Section pad='large'
    justify='center'
    align='center'>
    <Headline margin='none'>
    <Hero background={<Image src="https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                fit='cover'
                full={true} />}
                backgroundColorIndex='light'
                size="large">
                
                <Box basis='1/2'
                    align='end'
                    pad='medium' />
                <Box basis='1/2'
                    align='start'
                    pad='medium'>
                <Heading margin='none' justify="start" >
                        Replate
                </Heading>
                </Box>
                
            </Hero>
    </Headline>
  </Section>
  <Section pad='large'
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
  </Section>
  <Section pad='large'
    justify='center'
    align='center'>
    <Headline margin='none'>
    <AnnotatedMeter legend={true}
    size='medium'
    type='circle'
    max={70}
    series={[{"label": "First", "value": 20, "colorIndex": "graph-1"}, {"label": "Second", "value": 50, "colorIndex": "graph-2"}]} />
    </Headline>
  </Section>
</Article>




            </App>
        );
    }

}

export default Replate;