import React from 'react';
import styled from 'styled-components';
import locIcon from '../img/location.png';

export const Heading1 = styled.h1`
    margin: 0px;
    font-size: ${props => props.theme.sizes.heading1};
    font-weight: 500;
`;

export const Heading2 = styled.h2`
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.heading2};
    font-size: ${props => props.theme.sizes.heading2};
    font-weight: 500;
    -webkit-print-color-adjust: exact;
`;

export const Heading3 = styled.h3`
    margin-bottom: 1.2rem;
    color: ${props => props.theme.colors.heading3};
    font-size: ${props => props.theme.sizes.heading3};
    font-weight: 500;
    -webkit-print-color-adjust: exact;
`;

export const Heading4 = styled.h4`
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.heading4};
    font-size: ${props => props.theme.sizes.heading4};
    font-weight: 500;
    -webkit-print-color-adjust: exact;
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.content};
    font-size: ${props => props.theme.sizes.content};
    -webkit-print-color-adjust: exact;
`;

export const Link = styled.a`
    color: ${props => props.color ?? props.theme.colors.link};
    font-size: ${props => props.theme.sizes.content};
    -webkit-print-color-adjust: exact;
    text-decoration: none;
    :hover,
    :active {
        color: ${props => props.color ?? props.theme.colors.link};
    }
`;

export const List = styled.ul`
    margin: ${props => props.margin ?? "0.8rem 0"};
    padding: ${props => props.padding ?? "0 0 0 2.1rem"};
    font-size: ${props => props.theme.sizes.content};
    list-style: ${props => props.listStyle ?? ''};
    line-height: 2.8rem;
`;

export const ListItem = styled.li`
    color: ${props => props.theme.colors.content};
    -webkit-print-color-adjust: exact;
`;

export const IconSd = styled.img`
    width: 1.3rem;
    margin: 0 .7rem .2rem 3rem;
`;

export const LocationIcon = () => (
    <IconSd src={locIcon} />
);