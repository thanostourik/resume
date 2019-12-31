import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderSd = styled.div`
    grid-area: header;
`;

const Header = ({ children }) => (
    <HeaderSd>
        {children}
    </HeaderSd>
);
Header.propTypes = {
    children: PropTypes.node
};

export default Header;