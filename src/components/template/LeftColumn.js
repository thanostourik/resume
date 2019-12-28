import React from 'react';
import styled from 'styled-components';

const LeftColumnSd = styled.div`
    grid-area: left;
`;

const LeftColumn = ({ children }) => (
    <LeftColumnSd>
        {children}
    </LeftColumnSd>
);

export default LeftColumn;