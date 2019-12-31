import React from 'react';
import PropTypes from 'prop-types';
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
MainSection.propTypes = {
    children: PropTypes.node
};

export default MainSection;