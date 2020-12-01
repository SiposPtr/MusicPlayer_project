import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
import YouTube from 'react-native-youtube';
const App = () => {
    return (
      <View>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}

        value={"value"}
      />
       <Text>ad</Text>
      </View>
    );
    function vmi() {
      Alert.alert("vmi")
    }
};

export default App;
