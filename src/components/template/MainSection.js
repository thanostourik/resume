import React from 'react';
import styled from 'styled-components';

const MainSectionSd = styled.div`
    margin-bottom: 5rem;
    line-height: 1.25;
    :last-child {
        margin-bottom: 0;
    }
`;

const MainSection = ({ children }) => (
    <MainSectionSd>
        {children}
    </MainSectionSd>
);

export default MainSection;