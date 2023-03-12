import React from 'react';
import PropTypes from 'prop-types';
import Vars from '../../utils/vars';
import MainSection from '../template/MainSection';
import { Heading2, Heading3, List, ListItem } from '../General';
import styled from 'styled-components';

const ProjectSC = styled.div`
    :not(:last-child) {
        margin-bottom: ${props => props.theme.spaces.screen.item};
    }
`;

const TitleDescriptionSC = styled.div`
	display: flex;
  	gap: 1rem;
  	align-items: baseline;
`;

const DescriptionSC = styled.span`
	font-style: italic;
  	color: ${props => props.theme.colors.heading4};
  	font-size: ${props => props.theme.sizes.content};
`;

const PositionSC = styled.div`
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.heading4};
    font-size: ${props => props.theme.sizes.content};
`;

const Project = ({ title, position, description, responsibilities }) => {
	return (
		<ProjectSC>
			<TitleDescriptionSC>
				<Heading3>
					{title}
				</Heading3>
				<DescriptionSC>
					({description})
				</DescriptionSC>
			</TitleDescriptionSC>
			<PositionSC>
				{position}
			</PositionSC>
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
		</ProjectSC>
	)
};

const Projects = ({ data }) => (
	<MainSection>
		<Heading2>{Vars.projects}</Heading2>
		{
			data.map((item, index) => (
				<Project
					key={index}
					{...item}
				/>
			))
		}
	</MainSection>
);

Project.propTypes = {
	title: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	responsibilities: PropTypes.arrayOf(PropTypes.string),
};
Projects.propTypes = {
	data: PropTypes.array,
};

export default Projects;
