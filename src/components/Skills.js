import React from 'react';
import Vars from '../vars';
import { Heading2, List, ListItem } from './General';
import SidebarSection from './template/SidebarSection';

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

export default Skills;