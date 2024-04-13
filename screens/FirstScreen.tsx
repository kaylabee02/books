/* eslint-disable prettier/prettier */
// screens/HomeScreen.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from '../AppNavigator'; // Your main component or navigation stack

const queryClient = new QueryClient();

const FirstScreen: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
};

export default FirstScreen;
