import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Vars from '../../utils/vars';
import { Heading2, List, ListItem } from '../General';
import SidebarSection from '../template/SidebarSection';

const ListItemSd = styled(ListItem)`
    display: flex;
    justify-content: space-between;
`;

const LevelSd = styled.span`
    font-size: 1.6rem;
    font-style: italic;
`;

const Languages = ({ data }) => (
    <SidebarSection>
        <Heading2>{Vars.languages}</Heading2>
        <List 
            margin="0"
            padding="0"
            listStyle="none"
        >
            {
	            data.map((lang, index) => (
                    <ListItemSd key={index}>
                        <span>{lang.language}</span>
                        <LevelSd>{lang.level}</LevelSd>
                    </ListItemSd>
                ))
            }
        </List>
    </SidebarSection>
);

Languages.propTypes = {
	data: PropTypes.array.isRequired
};

export default Languages;