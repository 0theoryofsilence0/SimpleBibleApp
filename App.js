import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainView from './components/MainView';
import SectionView from './components/SectionView';
import BooksView from './components/BooksView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainView"
          component={MainView}
          options={{
            title: 'KJV Bible App',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="SectionView"
          component={SectionView}
          options={{
            title: 'Books',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="BooksView"
          component={BooksView}
          options={({ route }) => ({ 
            title: route.params.title,
            headerTitleAlign: 'center'
           })}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App