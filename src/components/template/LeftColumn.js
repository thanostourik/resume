import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeftColumnSd = styled.div`
    grid-area: left;
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