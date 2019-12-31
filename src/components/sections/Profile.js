import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Vars from '../../utils/vars';
import { Heading2, Span } from '../General';
import MainSection from '../template/MainSection';

const SpanSd = styled(Span)`
    line-height: 1.5;
`;

const Profile = ({ profile }) => (
    <MainSection>
        <Heading2>{Vars.profile}</Heading2>
        <SpanSd>{profile}</SpanSd>
    </MainSection>
);

Profile.propTypes = {
    profile: PropTypes.string.isRequired
};

export default Profile;