import React from 'react';
 
import { Text } from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  margin: 0 auto;
  text-align: center;
`;

const MainText = styled.Text`
  font-size: 20;
`;

const LoginButton = styled.Button`
  width: fit-content;
  padding: 5px;
  margin: 0 auto;
  color: #ffffff;
  font-size: 14;
`;

function Title() {
  return (
    <Container>
      <Text>랜딩페이지</Text>
    </Container>
  );
}

function index({ navigation }) {
  return (
    <Container>
      <Title />
    </Container>
  );
}

export default index;
