import React from 'react';
import styled from 'styled-components';

const RightColumnSd = styled.div`
    grid-area: right;
`;

const RightColumn = ({ children }) => (
    <RightColumnSd>
        {children}
    </RightColumnSd>
);

export default RightColumn;