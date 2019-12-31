import React from 'react';
import PropTypes from 'prop-types';
import Vars from '../../utils/vars';
import { Heading2, List, ListItem } from '../General';
import SidebarSection from '../template/SidebarSection';

const Interests = ({ interests }) => (
    <SidebarSection>
        <Heading2>{Vars.interests}</Heading2>
        <List padding="0 0 0 20px">
            {
                interests.map((interest, index) => (
                    <ListItem key={index}>{interest}</ListItem>
                ))
            }
        </List>
    </SidebarSection>
);

Interests.propTypes = {
    interests: PropTypes.array.isRequired
};

export default Interests;