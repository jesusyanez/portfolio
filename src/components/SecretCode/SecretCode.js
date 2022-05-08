import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxName, BoxText } from './SecretCodeStyles';

const data = [
  { name: 'Next App TypeScript', text: 'npx create-next-app@latest --ts my-app', },
  { name: 'Create React App', text: 'npx create-react-app my-app'},
  { name: 'Git View Repo', text: 'git remote show origin', },
  { name: 'Git Set Origin', text: 'git remote set-url origin new.git.url/here', },
  { name: 'Next App with TailwindCSS', text: 'npx create-next-app --example with-tailwindcss my-app', },
  { name: 'Next App', text: 'npx create-next-app@latest my-app', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Secret Code</SectionTitle>
    <SectionText>This is code I might need later.</SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxName>{`${card.name}`}</BoxName>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
