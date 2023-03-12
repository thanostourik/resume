import React from 'react';
import PropTypes from 'prop-types';
import mediaQueries from '../../utils/mediaQueries';
import styled from 'styled-components';

const ResumeSd = styled.div`
    padding: 4rem 5rem;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;

    ${mediaQueries.desktop`
        width: 1024px;
        margin: 0 auto;
        padding: 3rem 0;
        display: grid;
        grid-gap: 6rem;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: "header header"
                            "left right";
    `}

    ${mediaQueries.print`
        padding: 0;
    `}
`;

const Resume = ({ children }) => {
	return (
		<ResumeSd>
			{children}
		</ResumeSd>
	);
}
Resume.propTypes = {
    children: PropTypes.node
};

export default Resume;