import React from 'react';
import styled from 'styled-components';

const HeaderSd = styled.div`
    grid-area: header;
`;

const Header = ({ children }) => (
    <HeaderSd>
        {children}
    </HeaderSd>
);

export default Header;