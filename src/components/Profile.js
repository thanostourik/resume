import React from 'react';
import styled from 'styled-components';
import Vars from '../vars';
import { Heading2, Span } from './General';
import MainSection from './template/MainSection';

const SpanSd = styled(Span)`
    line-height: 1.5;
`;

const Profile = ({ profile }) => (
    <MainSection>
        <Heading2>{Vars.profile}</Heading2>
        <SpanSd>{profile}</SpanSd>
    </MainSection>
);

export default Profile;