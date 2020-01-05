import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mediaQueries from '../../utils/mediaQueries';

const HeaderSd = styled.div`
    order: 1;
    margin-bottom: 5rem;
    ${mediaQueries.desktop`
        grid-area: header;
        margin-bottom: 0;
    `}
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