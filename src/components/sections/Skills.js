import React from 'react';
import PropTypes from 'prop-types';
import Vars from '../../utils/vars';
import { Heading2, List, ListItem } from '../General';
import SidebarSection from '../template/SidebarSection';

const Skill = ({ skill }) => (
    <ListItem>{skill}</ListItem>
);

const Skills = ({ data }) => (
    <SidebarSection>
        <Heading2>{Vars.skills}</Heading2>
        <List
            margin="0"
            padding="0"
            listStyle="none"
        >
            {
	            data.map((skill, index) => (
                    <Skill
                        key={index}
                        skill={skill}
                    />
                ))
            }
        </List>
    </SidebarSection>
);

Skill.propTypes = {
    skill: PropTypes.string.isRequired
};
Skills.propTypes = {
	data: PropTypes.array.isRequired
};

export default Skills;