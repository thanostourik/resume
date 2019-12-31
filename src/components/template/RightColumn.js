import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RightColumnSd = styled.div`
    grid-area: right;
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