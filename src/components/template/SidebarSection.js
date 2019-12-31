import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarSectionSd = styled.div`
    margin-bottom: 5rem;
    line-height: 1.5;
    :last-child {
        margin-bottom: 0;
    }
`;

const SidebarSection = ({ children }) => (
    <SidebarSectionSd>
        {children}
    </SidebarSectionSd>
);
SidebarSection.propTypes = {
    children: PropTypes.node
};

export default SidebarSection;