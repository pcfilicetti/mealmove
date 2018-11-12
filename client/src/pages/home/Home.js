import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Carousel from 'grommet/components/Carousel';

import React, { Component } from "react";
import API from "../../utils/API";

import CustomFooter from '../../components/CustomFooter';
import DonateTabs from '../../components/DonateTabs';
import StatisticsSection from '../../components/StatisticsSection';

class Replate extends Component {
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

    handleClick = (event) => {
        event.preventDefault();
    };

    

    render () {
        return (
            <Article scrollStep={false}>

                {/* hero page */}
                <Hero background={<Image alt='bread and greens on a wood table' src="https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" fit='cover' full={true} />} backgroundColorIndex='light' size="large">
                    <Headline margin='none' align="center" size="large" uppercase="true" truncate="true">REPLATE</Headline>
                    <Box direction='row' justify='center' align='center'>
                        <Box basis='1/2' align='end' pad='medium' />
                        <Box basis='1/2' align='start' pad='medium'>
                        </Box>
                    </Box>  
                </Hero>

                {/* how this works section */}
                <StatisticsSection />

                {/* signup form section */}
                <DonateTabs />

                {/* partnered businesses section */}
                <Section pad='large' colorIndex='grey-4' align="center" >
                    <Heading margin='medium' align="center" size="medium" uppercase={true} truncate={true} strong={true}>PARTNERED BUSINESSES</Heading>
                    <Paragraph id="aboutText" align="center">
                        <Carousel>
                            <Image src='http://www.natashalandau.net/images/title_good_burger.png'/>
                            <Image src='http://t2.rbxcdn.com/2ca42cc723e65da043f0c98dcddd1b0e'/>
                            <Image src='https://ih0.redbubble.net/image.466833630.4168/flat,1000x1000,075,f.u2.jpg'/> 
                        </Carousel>
                    </Paragraph>
                </Section>

                <CustomFooter />
            </Article>
        );
    }

}

export default Replate;