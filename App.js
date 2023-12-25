/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   Button,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import UserProfileClassComponent from './src/components/ClassComponents/UserProfileClassComponent';

// import UserInfoFunComponent from './src/components/FuncationalComponent/UserProfileComponent';

// const userObject = {
//   basicInfo: {
//     firstName: 't',
//     lastName: 'boss',
//     gender: 'Male',
//     DOB: 'Dec 3',
//   },
//   contactInfo: {
//     cell: '123456789',
//     email: 'ntboss@gmail.com',
//     address: '123 street',
//     city: 'AH',
//     country: 'Bharat',
//   },
//   educationInfo: {
//     lastDegree: 'MS',
//     university: 'NEDUET',
//   },
// };

// function App() {
//   const [parentBGColor, setParentBGColor] = useState('yellow');

//   return (

    
//     <SafeAreaView style={{flex: 1}}>
//       <ScrollView>
//         <View style={{flex: 1}}>
//           <Text style={styles.head}>Class Component</Text>
//           <UserProfileClassComponent userObject={userObject} />
//         </View>
//         <View style={{flex: 1}}>
//           <Text style={styles.head}>Functional Component</Text>
//           <UserInfoFunComponent userObject={userObject} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   head: {
//     paddingVertical: 10,
//     marginVertical: 10,
//     fontSize: 20,
//     color: '#1e90ff',
//     backgroundColor: '#add8e6',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     borderTopWidth: 5,
//     borderBottomWidth: 5,
//     borderColor: '#483d8b',
//   },
// });

// export default App;


import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SimpleForm from './src/components/navigation_project/SimpleFrom';
import DetailsComponent from './src/components/navigation_project/DetailsComponent';
import UserProfileClassComponent from './src/components/ClassComponents/UserProfileClassComponent';


const Stack = createNativeStackNavigator();

const userObject = {
  basicInfo: {
    firstName: 't',
    lastName: 'boss',
    gender: 'Male',
    DOB: 'Dec 3',
  },
  contactInfo: {
    cell: '123456789',
    email: 'ntboss@gmail.com',
    address: '123 street',
    city: 'AH',
    country: 'Bharat',
  },
  educationInfo: {
    lastDegree: 'MS',
    university: 'NEDUET',
  },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen  name="Home"  component={SimpleForm} /> */}
        <Stack.Screen
          name="Home"
          component={SimpleForm}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#4285f4', 
              
            },
            headerTitleStyle: {
              color: '#fff', 
              fontSize: 20,  
            },
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen name="Details" component={DetailsComponent} 
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#4285f4', 
            
          },
          headerTitleStyle: {
            color: '#fff', 
            fontSize: 20,  
          },
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen name="classUser" component={UserProfileClassComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;