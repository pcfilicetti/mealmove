import React from 'react';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import SocialShare from 'grommet/components/SocialShare';
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import Anchor from 'grommet/components/Anchor';

const CustomFooter = () => (
    <Footer justify='between' size='medium'>
    <Title><s/><s/>MealMove</Title>
    <Box direction='row' align='center' pad={{"between": "large"}}>
        <Paragraph margin='none'>MealMove © 2018</Paragraph>
        <Menu direction='row' size='medium' dropAlign={{"left": "left"}}>
            <SocialShare link='MealMoveDC@gmail.com' type='email' title='Sample Title'/>
            <SocialShare type='facebook' link='https://www.facebook.com/MealMove-DC-346803842736854/?modal=admin_todo_tour'/>
            <Anchor icon={<SocialInstagramIcon />} label='' href='https://www.instagram.com/MealMovedc/' />
            <SocialShare type='google' link='https://grommet.io' />
            <SocialShare type='twitter' link='https://twitter.com/MealMoveDC18'/>
            <Anchor icon={<SocialGithubIcon />} label='' href='https://github.com/pcfilicetti/MealMove/' />
        </Menu>
    </Box>
</Footer>
);

export default CustomFooter;