import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Vars from '../../utils/vars';
import { Heading2, Heading4, Span, Link } from '../General';
import SidebarSection from '../template/SidebarSection';

const InfoItemSd = styled.div`
    :not(:last-child) {
        margin-bottom: 2.5rem;
    }
`;

const InfoLink = styled(Link)`
    color: ${props => props.theme.colors.content};
    :hover,
    :active {
        color: ${props => props.theme.colors.content};
    }
`;

const Info = ({ address, phone, email }) => (
    <SidebarSection>
        <Heading2>{Vars.info}</Heading2>
        <InfoItemSd>
            <Heading4>Address</Heading4>
            <Span>{address}</Span>
        </InfoItemSd>
        <InfoItemSd>
            <Heading4>Phone</Heading4>
            <InfoLink href={`tel:${phone}`}>{phone}</InfoLink>
        </InfoItemSd>
        <InfoItemSd>
            <Heading4>Email</Heading4>
            <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
        </InfoItemSd>
    </SidebarSection>
);

Info.propTypes = {
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default Info;