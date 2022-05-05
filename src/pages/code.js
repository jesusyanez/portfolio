import Link from 'next/link';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import SecretCode from '../components/SecretCode/SecretCode';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Code = () => {
  return (
    <Layout>
      <SecretCode />
    </Layout>
  );
};

export default Code;

// export default function FirstPost() {
//   return (
//     <>
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </h2>
//     </>
//   );
// }
