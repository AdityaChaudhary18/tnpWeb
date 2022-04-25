import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Why Recruit at IIITS?" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>
              IIIT, Sonepat encourages its students to balance their academics
              and co-curricular activities. This allows for an all-round
              development, as evidenced by the numerous projects undertaken and
              the participation in sports and cultural events. This is evident
              from the wide repertoire of projects that they have done as well
              as their participation in sports and cultural events. The
              institute also encourages the students to showcase their research
              in national conferences and workshops. The students work as
              Teaching Assistants, guiding and aiding the students in the
              batches that are junior to them.
            </p>

            <h1>The Academic Program</h1>
            <p>
              The Courses are finely refined and fabricated to meet the needs of
              the versatile industry and latest research areas. The highly
              qualified, intellectual and technically proficient faculty at
              IIIT-Lucknow fuel the learning process in turn igniting the minds.
            </p>
            <h1>Admission Criteria</h1>
            <p>
              B.Tech Entrance at IIIT Sonepat is based on JEE Mains score. As
              the students are admitted through the esteemed JEE Mains and
              represents the top 2% of the candidates that appear for the exam
              nationwide, they are handpicked from the garden of knowledge and
              critical thinking. These students are enriched with both
              qualitative and quantitative skills, thus they make up for the
              best in class.
            </p>
            <h1>Our Placements and Internships</h1>
            <p>
              The campus has opened doors for various internships which include
              2-months summer internships and 6 months internships for pre-final
              and final year students respectively.
            </p>
            <h1>Faculty</h1>
            <p>
              Our faculty can be compared favorably with the best in the
              country. All regular faculty members of the IIIT Sonepat, hold
              Ph.D. and have good teaching skills. Our faculty have published
              various national and international journals and conference
              proceedings and organized several workshops. Our focus on
              recruiting world-class faculty and strong research programs bodes
              well for the future of the institute, which is fast emerging as
              one of the best in the country and also making its presence felt.
            </p>
            <h1>Projects</h1>
            <p>
              Projects are an integral part of the education program. Students
              are required to do group projects/research in many courses that
              they are taught. Students are also provided with an option of the
              independent study which enables them to do research in the field
              of their interest.
            </p>
            <h1>Coders At Work</h1>
            <p>
              Our students take part in many renowned programming competitions
              like ACM-ICPC and Capture the Flag(CTF). And our students are
              honing their skills on websites like Topcoder, SPOJ, CodeChef etc.
              in various languages.
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
