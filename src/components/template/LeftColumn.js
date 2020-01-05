import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mediaQueries from '../../utils/mediaQueries';

const LeftColumnSd = styled.div`
    order: 3;
    ${mediaQueries.desktop`
        grid-area: left;
    `}
`;

const LeftColumn = ({ children }) => (
    <LeftColumnSd>
        {children}
    </LeftColumnSd>
);
LeftColumn.propTypes = {
    children: PropTypes.node
};

export default LeftColumn;