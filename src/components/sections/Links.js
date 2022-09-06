import React from 'react';
import PropTypes from 'prop-types';
import Vars from '../../utils/vars';
import { Heading2, List, ListItem, Link } from '../General';
import SidebarSection from '../template/SidebarSection';

const LinkItem = ({ label, link }) => (
    <ListItem>
        <Link target="_blank" href={link}>{label}</Link>
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
                    <LinkItem
                        key={index}
                        link={link.link}
                        label={link.label}
                    />
                ))
            }
        </List>
    </SidebarSection>
);

LinkItem.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
Links.propTypes = {
    links: PropTypes.array.isRequired
};

export default Links;