import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Vars from '../../utils/vars';
import { Heading2, Heading3, LocationIcon } from '../General';
import MainSection from '../template/MainSection';

const EducationSd = styled.div`
    :not(:last-child) {
        margin-bottom: ${props => props.theme.spaces.screen.item};
    }
`;

const SubTitleSd = styled.div`
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.heading4};
    font-size: ${props => props.theme.sizes.content};
`;

const DescriptionSd = styled.div`
    color: ${props => props.theme.colors.content};
    font-size: ${props => props.theme.sizes.content};
    ul {
        margin: 0.8rem 0;
        padding-left: 2.1rem;
        line-height: 2.8rem;
    }
`;

const Education = ({ institution, degree, start, end, location, description }) => {
    return (
        <EducationSd>
            <Heading3>
                {`${institution},`}&nbsp;{degree}
            </Heading3>
            <SubTitleSd>
                {start}&nbsp;-&nbsp;{end}
                <LocationIcon />{location}
            </SubTitleSd>
            { description && <DescriptionSd dangerouslySetInnerHTML={{__html:description}}/> }
        </EducationSd>
    )
};

const Educations = ({ education }) => (
    <MainSection>
        <Heading2>{Vars.education}</Heading2>
        {
            education.map((edu, index) => (
                <Education key={index} {...edu} />
            ))
        }
    </MainSection>
);

Education.propTypes = {
    institution: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string
};
Educations.propTypes = {
    education: PropTypes.array.isRequired
};

export default Educations;