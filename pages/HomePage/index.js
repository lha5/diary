import React from 'react';
import { Button } from 'react-native';

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

function index({ navigation }) {
  return (
    <Container>
      <MainText>홈</MainText>
      <br />
      <LoginButton
        title="랜딩"
        onPress={() => navigation.navigate('Landing')}
      />
      <br />
      <LoginButton
        title="로그인"
        onPress={() => navigation.navigate('Login')}
      />
      <br />
      <Button
        styled={{ width: 'fit-content', margin: '5 auto' }}
        onPress={() => navigation.navigate('Feed')}
        title="피드"
      />
      <br />
      <Button
        styled={{ width: 'fit-content', margin: '5 auto' }}
        onPress={() => navigation.navigate('Post')}
        title="포스팅"
      />
    </Container>
  );
}

export default index;
