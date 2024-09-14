import styled from 'styled-components/native';
import {Text, Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/navi';


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
