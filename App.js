import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/home';
import { Feather } from '@expo/vector-icons';
import PlanningPage from './src/screens/planningPage';
import StudentListPage from './src/screens/StudentListPage';
import GradeListPage from './src/screens/GradeListPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigatePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StudentList" component={StudentListPage} />
      <Stack.Screen name="GradeList" component={GradeListPage} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#025E73',
            height: 100,
            shadowOpacity: 0.5,
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#878787',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="Calendar"
          component={PlanningPage}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="calendar" size={24} color={color} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="DataGroups"
          component={StackNavigatePage}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="file" size={24} color={color} />
            ),
            tabBarShowLabel: false,
          }}
        ></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
