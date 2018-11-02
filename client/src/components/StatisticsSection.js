import React from 'react';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import CafeteriaIcon from 'grommet/components/icons/base/Cafeteria';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import CarIcon from 'grommet/components/icons/base/Car';
import GroupIcon from 'grommet/components/icons/base/Group';

const StatisticsSection = () => (
    <Section pad='large' justify="center" align="center" colorIndex='grey-4'>
        <Heading  margin='large' align="center" size="medium" strong={true}>How can we waste less food and feed more people?</Heading>
        <Box direction="row"  justify="center" align="center" wrap={true} pad="small" margin="small">
            <Box direction="row" wrap={false}>
                <Meter id='landfillMeter' type='circle' colorIndex="ok" value={21} activeIndex={0} onActive={function (index){}} label={<Value value={21} units='%' size="medium" />} size="small"/>
                <Label labelFor='#landfillMeter' size="medium" > of landfill volume is food waste.</Label>
            </Box>
                            
            <Box direction="row" wrap={false}>
                <Meter id='moneyMeter' type='circle' colorIndex="ok" value={1} max={3} activeIndex={0} onActive={function (index){}} label={<Value value={1} units='in 3' size="medium" />} size="small"/>
                <Label labelFor='#landfillMeter' size="medium"> residents in Washington, D.C. is at risk of hunger.</Label>
            </Box>

            <Box direction="row" wrap={false}>
                <Meter id='lbFoodMeter' type='circle' colorIndex="ok" value={72} activeIndex={0} onActive={function (index){}} label={<Value value={72} units='Billion' size="small" />} size="small"/>
                <Label labelFor='#landfillMeter' size="medium"> pounds of food are wasted each year.</Label>
            </Box>
                        
        </Box>
        <Box direction="row" wrap={false}>
            <p id="aboutText" truncate='true'>
            America has more than enough food to feed everyone. $218 billion worth of food is thrown away each year excluding 52 billion pounds of food from grocery stores, restaurants and manufacturers. 
            </p>
            <p id="aboutText" truncate='true'>
            National food industry, government agencies, environmental organizations agree to reducing food waste as a top priority for protecting the environment as astounding 21% of landfill volume is food waste.
            </p>
            <p id="aboutText" truncate='true'>
                Replate aims to connect those with excess food to those who are in need. We are targeting restaurants, grocery stores and farms and asking them to donate food that would be thrown out. 
                Volunters pick up this food and bring it to local food banks.
                <br></br><br></br><br></br>
            </p>
        </Box>

        <Box direction='row'>
            <CafeteriaIcon pad='medium' margin='small'color='brand' size='xlarge'/> 
            <FormNextLinkIcon pad='medium' margin='small' color= 'plain' size ='xlarge'/> 
            <CarIcon pad='medium' margin='small' color= 'plain' size ='xlarge'/>
            <FormNextLinkIcon pad='medium' margin='small' color= 'plain' size ='xlarge'/>
            <GroupIcon pad='medium' margin='small' color= 'plain' size ='xlarge'/>
        </Box>
                        
    </Section>
);

export default StatisticsSection;