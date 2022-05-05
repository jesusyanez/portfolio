import React from 'react';
import { DiAws, DiFirebase, DiNodejs, DiReact, DiHeroku } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. From Back-end to Front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Next.js | React.js | Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node | Python | Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHeroku size="3rem"/>
        <ListContainer>
          <ListTitle>Cloud Hosting</ListTitle>
          <ListParagraph>
            Experience with <br/>
            AWS | Heroku
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
