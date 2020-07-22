import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const CourseStyled = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const Course = () => {
  return (
    <CourseStyled>
      {/* <Header /> */}
      <h1>hello</h1>
    </CourseStyled>
  );
};
export default Course;
