import React from 'react';
import style from 'styled-components';
import Vars from '../../utils/vars';
import { Heading2, List, ListItem } from '../General';
import SidebarSection from '../template/SidebarSection';

const LinkSd = style.a`
    text-decoration: none;
    color: #B58E58;
    :active {
        color: #B58E58;
    }
    :hover {
        color: #B58E58;
    }
`;

const Link = ({ label, link }) => (
    <ListItem>
        <LinkSd target="_blank" href={link}>{label}</LinkSd>
    </ListItem>
);

const Links = ({ links }) => (
    <SidebarSection>
        <Heading2>{Vars.links}</Heading2>
        <List
            margin="0"
            padding="0"
            listStyle="none"
        >
            {
                links.map((link, index) => (
                    <Link
                        key={index}
                        link={link.link}
                        label={link.label}
                    />
                ))
            }
        </List>
    </SidebarSection>
);

export default Links;