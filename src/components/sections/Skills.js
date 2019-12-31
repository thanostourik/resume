import React from 'react';
import PropTypes from 'prop-types';
import Vars from '../../utils/vars';
import { Heading2, List, ListItem } from '../General';
import SidebarSection from '../template/SidebarSection';

const Skill = ({ skill }) => (
    <ListItem>{skill}</ListItem>
);

const Skills = ({ skills }) => (
    <SidebarSection>
        <Heading2>{Vars.skills}</Heading2>
        <List
            margin="0"
            padding="0"
            listStyle="none"
        >
            {
                skills.map((skill, index) => (
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
    skills: PropTypes.array.isRequired
};

export default Skills;