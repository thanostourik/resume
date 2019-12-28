import React from 'react';
import styled from 'styled-components';
import Vars from '../vars';
import { Heading2, Heading4, Span } from './General';
import SidebarSection from './template/SidebarSection';

const InfoItemSd = styled.div`
    :not(:last-child) {
        margin-bottom: 2.5rem;
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
            <Span>{phone}</Span>
        </InfoItemSd>
        <InfoItemSd>
            <Heading4>Email</Heading4>
            <Span>{email}</Span>
        </InfoItemSd>
    </SidebarSection>
);

export default Info;