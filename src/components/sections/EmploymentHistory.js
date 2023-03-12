import React from 'react';
import PropTypes from 'prop-types';
import Vars from '../../utils/vars';
import MainSection from '../template/MainSection';
import { Heading2, Heading3, List, ListItem, LocationIcon } from '../General';
import styled from 'styled-components';

const EmploymentSd = styled.div`
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

const Employment = ({ jobTitle, employer, start, end, location, responsibilities }) => {
    return (
        <EmploymentSd>
            <Heading3>
                {jobTitle}&nbsp;at&nbsp;{employer}
            </Heading3>
            <SubTitleSd>
                {start}&nbsp;-&nbsp;{end}
                <LocationIcon/>{location}
            </SubTitleSd>
            {
                responsibilities &&
                <List>
                    {
                        responsibilities.map((resp, index) => (
                            <ListItem key={index}>{resp}</ListItem>
                        ))
                    }
                </List>
            }
        </EmploymentSd>
    )
};

const EmploymentHistory = ({ data }) => (
    <MainSection>
        <Heading2>{Vars.employmentHistory}</Heading2>
        {
	        data.map((employment, index) => (
                <Employment 
                    key={index} 
                    {...employment} 
                />
            ))
        }
    </MainSection>
);

Employment.propTypes = {
    jobTitle: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
	responsibilities: PropTypes.arrayOf(PropTypes.string),
};
EmploymentHistory.propTypes = {
	data: PropTypes.array.isRequired
};

export default EmploymentHistory;