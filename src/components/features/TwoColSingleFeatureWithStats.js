import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-10 `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-10 `;
const ImageColumn = tw(
  Column
)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-8 lg:mr-16 md:order-first`
    : tw`md:ml-8 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(
  SectionHeading
)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`;

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`;
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`;
const Value = tw.div`font-bold text-primary-900`;
const Key = tw.div`font-medium text-gray-700`;
const data = [
  {
    name: "2014-2018",
    HighestPackage: 23.84,
    AveragePackage: 6.44,
    MedianPackage: 5,
    LowestPackage: 3.5,
  },
  {
    name: "2015-2019",
    HighestPackage: 40.63,
    AveragePackage: 8.19,
    MedianPackage: 7,
    LowestPackage: 4.1,
  },
  {
    name: "2016-2020",
    HighestPackage: 23.84,
    AveragePackage: 9.21,
    MedianPackage: 9,
    LowestPackage: 5.5,
  },
  {
    name: "2017-2021",
    HighestPackage: 41,
    AveragePackage: 13.16,
    MedianPackage: 12,
    LowestPackage: 5,
  },
];
export default ({ textOnLeft = false }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const statistics = [
    {
      key: "DATA1",
      value: "x",
    },
    {
      key: "DATA2",
      value: "y",
    },
    {
      key: "DATA3",
      value: "z",
    },
    {
      key: "DATA4",
      value: "x",
    },
  ];

  return (
    <Container>
      <TwoColumn>
        <ResponsiveContainer width={"90%"} height={600}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="HighestPackage" fill="#8884d8" />
            <Bar dataKey="AveragePackage" fill="#82ca9d" />
            <Bar dataKey="MedianPackage" fill="#1578F1" />
            <Bar dataKey="LowestPackage" fill="#978168" />
          </BarChart>
        </ResponsiveContainer>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>Placement Statistics</Heading>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
