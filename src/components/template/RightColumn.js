import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mediaQueries from '../../utils/mediaQueries';

const RightColumnSd = styled.div`
    order: 2;
    margin-bottom: 5rem;
    ${mediaQueries.desktop`
        grid-area: right;
        margin-bottom: 0;
    `}
`;

const RightColumn = ({ children }) => (
    <RightColumnSd>
        {children}
    </RightColumnSd>
);
RightColumn.propTypes = {
    children: PropTypes.node
};

export default RightColumn;