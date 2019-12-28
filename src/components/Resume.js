import React from 'react';
import styled from 'styled-components';

const ResumeSd = styled.div`
    width: 900px;
    padding: 5rem 8rem;
    margin: 0 auto;
    display: grid;
    grid-gap: 6rem;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "header header"
                          "left right";
    font-family: 'Lato', sans-serif;
`;

const Resume = ({ children }) => (
    <ResumeSd>
        {children}
    </ResumeSd>
);

export default Resume;