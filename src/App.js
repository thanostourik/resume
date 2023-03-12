import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Heading1 } from './components/General';
import Resume from './components/template/Resume';
import Header from './components/template/Header';
import LeftColumn from './components/template/LeftColumn';
import RightColumn from './components/template/RightColumn';
import Info from './components/sections/Info.js';
import Links from './components/sections/Links';
import Skills from './components/sections/Skills';
import Languages from './components/sections/Languages';
import Interests from './components/sections/Interests';
import Profile from './components/sections/Profile';
import EmploymentHistory from './components/sections/EmploymentHistory';
import Educations from './components/sections/Educations';
import Courses from './components/sections/Courses';

import theme from './theme';
import data from './utils/data.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  @media print {
    body {
      margin: 0;
    }
  }
`;

const SubHeader = styled.span`
  color: ${props => props.theme.colors.content};
  font-size: ${props => props.theme.sizes.subHeader};
  -webkit-print-color-adjust: exact;
`;

function App() {
	if ( !data ) return null;
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
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
