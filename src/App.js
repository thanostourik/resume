import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Heading1 } from './components/General';
import Resume from './components/Resume';
import Header from './components/template/Header';
import LeftColumn from './components/template/LeftColumn';
import RightColumn from './components/template/RightColumn';
import Info from './components/Info.js';
import Links from './components/Links';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Profile from './components/Profile';
import EmploymentHistory from './components/EmploymentHistory';
import Educations from './components/Educations';
import Courses from './components/Courses';

import theme from './theme';
import data from './data.json';

const SubHeader = styled.span`
  color: ${props => props.theme.colors.content};
  font-size: ${props => props.theme.sizes.subHeader};
  -webkit-print-color-adjust: exact;
`;

function App() {
  if ( !data ) return null;
  return (
    <ThemeProvider theme={theme}>
      <Resume>
        <Header>
          <Heading1>{data.firstName}&nbsp;{data.lastName}</Heading1>
          { data.jobTitle && <SubHeader>{data.jobTitle}</SubHeader> }
        </Header>
        <LeftColumn>
          { data.info && <Info {...data.info} /> }
          { data.links && <Links links={data.links} /> }
          { data.skills && <Skills skills={data.skills}/> }
          { data.languages && <Languages languages={data.languages} /> }
          { data.interests && <Interests interests={data.interests} /> }
        </LeftColumn>
        <RightColumn>
          { data.profile && <Profile profile={data.profile} /> }
          { data.employmentHistory && <EmploymentHistory employmentHistory={data.employmentHistory} /> }
          { data.education && <Educations education={data.education} /> }
          { data.courses && <Courses courses={data.courses} /> }
        </RightColumn>
      </Resume>
    </ThemeProvider>
  );
}

export default App;
