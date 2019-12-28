import React from 'react';
import styled from 'styled-components';
import Vars from '../vars';
import { Heading2, Heading3 } from './General';
import MainSection from './template/MainSection';

const CourseSd = styled.div`
    :not(:last-child) {
        margin-bottom: 5rem;
    }
`;

const PeriodSd = styled.span`
    color: ${props => props.theme.colors.heading4};
    font-size: ${props => props.theme.sizes.content};
`;

const Course = ({ course, institution, start, end }) => (
    <CourseSd>
        <Heading3>
            {course}, {institution}
        </Heading3>
        {
            start && end &&
            <PeriodSd>
                {start}&nbsp;-&nbsp;{end}
            </PeriodSd>
        }
    </CourseSd>
);

const Courses = ({ courses }) => (
    <MainSection>
        <Heading2>{Vars.courses}</Heading2>
        {
            courses.map((course, index) => (
                <Course key={index} {...course} />
            ))
        }
    </MainSection>
);

export default Courses;