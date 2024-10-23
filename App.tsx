import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskScreen from './src/screens/TaskScreen';
import LastActivityScreen from './src/screens/LastActivityScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome'

// Definição dos tipos para as rotas
export type RootStackParamList = {
  Tarefas: undefined;
  'Últimas Atividades': undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tarefas" component={TaskScreen} options={{tabBarIcon: ({ color }) => <FontAwesome size={40} name='home' color={ color }/>}}  />
        <Tab.Screen name="Últimas Atividades" component={LastActivityScreen} options={{tabBarIcon: ({ color }) => <FontAwesome size={40} name='list' color={ color }/>}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

