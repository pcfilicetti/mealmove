import React from 'react';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/List';

class DriDriver extends React.Component {
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

    render() {
        return (
            <Box wrap={false} margin='small'>
            {this.props.pickups.length ? (
                <List>
                    {this.props.pickups.map(pickup => (
                    <ListItem key={pickup._id}>
                        <strong>{pickup.establishment}</strong>
                        <br />
                        Pickups are scheduled every {pickup.weekDay} at {pickup.time}.
                        <br />
                        Food Type: {pickup.foodType}
                        <br />
                        Address: {pickup.address}
                        <br />
                        {this.checkContact(pickup)}
                    </ListItem>
                    ))}
                </List>
            ) : (
                <h3>No Results to Display</h3>
            )}
            </Box>
        );
    }
} 

export default DriDriver;