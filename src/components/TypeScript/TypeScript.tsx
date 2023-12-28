import React from 'react';
import { Text, View ,FlatList} from 'react-native';

const TypeScript = () =>{
type profileDetails = {
    'firstName': string,
    'lastName':string,
    'mobile':number,
    'status':true,
    'hobby':string[],

}
let profile: profileDetails = {
    'firstName':"Naresh",
    'lastName':"Malaviya",
    'mobile':1234567,
    'status':true,
    'hobby':["Reading","Swimming","Traveling"],
}

    const renderItem = ({ item }: { item: string }) => (
      <View style={{ padding: 5 }}>
        <Text>{item}</Text>
      </View>
    );
    
return (
    <View>
        <Text>TypeScript Example</Text>
       <Text>Name: {profile.firstName} {profile.lastName}</Text>
      <Text>Mobile: {profile.mobile}</Text>
      <Text>Status: {profile.status ? 'Active' : 'Inactive'}</Text>
      <Text>Hobbies:</Text>
      <FlatList
        data={profile.hobby}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
);
}
export default TypeScript;