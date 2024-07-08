import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import Route from './src/Route';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer />
    </QueryClientProvider>
  );
}
