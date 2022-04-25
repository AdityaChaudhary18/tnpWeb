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
const Heading = tw(SectionHeading)`text-gray-900 mb-4`;
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

export default ({ headingText = "Placement Procedure" }) => {
  return (
    <>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <ul>
              <li>
                The Training and Placement Office, IIITS sends invitations
                alongwith Job Notification Form(JNF) to organizations to
                participate in the campus placements.
              </li>
              <li>
                Organization fills in the JNF containing details of the job
                offer (pay package, place of posting, allowances and other
                bonuses). JNF can be sent by email to Training and Placement
                Office, IIITL (placements@iiitl.ac.in).
              </li>
              <li>
                The organization details alongwith job offer is made available
                to the students on a private group, requesting them to apply.
              </li>
              <li>
                Training and Placement Office, IIITL allots date(s) to an
                organization for campus placements. The organization confirms
                the date(s) to Training and Placement Office, IIITL.
              </li>
              <li>
                The list of the students who have applied is provided to the
                organization along with their Resumes.
              </li>
              <li>
                Organizations come to campus on the allotted date(s) and conduct
                tests and/or interviews as per their recruitment process.
              </li>
              <li>
                The organization is expected to furnish the list of selected
                candidates at the end of assigned interview slot, preferably on
                the day of campus visit.
              </li>
              <li>
                Training and Placement Office, IIITL also coordinates the
                signing of offer letter by students who have been selected to
                ensure that they reach the organization/company asap.
              </li>
            </ul>
            <br />
          </Text>
          <HeadingRow>
            <Heading>Job Policy</Heading>
          </HeadingRow>
          <Text>
            <p>
              Companies visit campus and select students as per their
              recruitment drive.
            </p>
            <p>
              <b>
                To a student finally selected by a company after all testing and
                interview rounds, the company may offer :
              </b>
            </p>
            <h1>Full time job offer</h1>
            <p>
              The selected student will join company in June 2022 as full time
              employee.
            </p>
            <h1>Internship</h1>
            <p>
              B. Tech 3rd year students are eligible for 2 months summer
              internship The student will join the company in May/June 2022 as
              an intern for a period of 2 months.
            </p>
            <p>
              B. Tech. 4th year students are eligible for 6 months internship.
              The student will join the company in January 2022 as an intern for
              a period of 6 months and complete their 8th semester project in
              the company.
            </p>
            <br />
          </Text>
          <HeadingRow>
            <Heading>Placement Policy</Heading>
          </HeadingRow>
          <Text>
            <h1>Classification of Company</h1>
            <p>
              The classification of a company will based on the criteria of pay
              packages(CTC) and work profile. The two classes being:
            </p>
            <ul>
              <li>First Round Company</li>
              <li>Dream Round Company</li>
            </ul>
            <p>
              Overall CTC of a company includes joining bonus and all other
              perks, if applicable. Eligibility for a dream round company for a
              student will be decided on the basis of overall CTC.
            </p>

            <h1>Job Offer for a student</h1>
            <br />
            <ul>
              <li>
                If a student's name appears on the final shortlist declared
                after the Company's process through the Placement Cell, then
                that would be considered as a Job Offer to the student.
              </li>
              <li>
                A student will be out of campus placement process only if he/she
                gets an offer from a Dream Round company.
              </li>
              <li>
                Students getting a Job Offer from a First Round company are
                still eligible for further placements and only these students
                are allowed to upgrade to a Dream Round company.
              </li>
              <li>
                PPO Offer and off-campus placements are also considered as Job
                Offer, hence the same policy is applicable to them.
              </li>
            </ul>
            <h1>Job Offer made by Company</h1>
            <br />
            <ul>
              <li>
                The companies are requested to announce the result/ final
                shortlist on the day of campus visit.
              </li>
              <li>
                The company should hand over the duly signed hard copy of the
                final selection list to the placement cell.
              </li>
              <li>
                The company shall provide the offer letters to the Placement
                office and not directly to the students.
              </li>
              <li>
                The purview of the Placement Cell is restricted only to the
                offers made as part of the campus placement process.
              </li>
              <li>
                In case the company is unable to declare the result on the same
                day, then the student is allowed to participate in other
                companies until the result is declared. The final status will
                depend upon who declares the result first.
              </li>
            </ul>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </>
  );
};
