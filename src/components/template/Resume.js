import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mediaQueries from '../../utils/mediaQueries';

const ResumeSd = styled.div`
    padding: 4rem 5rem;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;

    ${mediaQueries.desktop`
        width: 900px;
        margin: 0 auto;
        padding: 5rem 8rem;
        display: grid;
        grid-gap: 6rem;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: "header header"
                            "left right";
    `}
`;

const Resume = ({ children }) => (
    <ResumeSd>
        {children}
    </ResumeSd>
);
Resume.propTypes = {
    children: PropTypes.node
};

export default Resume;