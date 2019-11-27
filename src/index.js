import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import './config/Reactotron';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#141419" barStyle="light-content" />
      <Routes />
    </>
  );
}
