import React from 'react';
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

const Languages = ({ languages }) => (
    <SidebarSection>
        <Heading2>{Vars.languages}</Heading2>
        <List 
            margin="0"
            padding="0"
            listStyle="none"
        >
            {
                languages.map((lang, index) => (
                    <ListItemSd key={index}>
                        <span>{lang.language}</span>
                        <LevelSd>{lang.level}</LevelSd>
                    </ListItemSd>
                ))
            }
        </List>
    </SidebarSection>
);

export default Languages;