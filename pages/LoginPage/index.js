import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
  margin: 0 auto;
`;

function index() {
  return (
    <Container>
      <Text>로그인</Text>
    </Container>
    )
}

export default index;
