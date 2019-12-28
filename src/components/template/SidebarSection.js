import React from 'react';
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

export default SidebarSection;