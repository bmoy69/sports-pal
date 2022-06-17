import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-start' }}>
        <View style={{ padding: 8 }}>
          <Text style={{ fontSize: 18 }}>E-mail</Text>
        </View>
        <TextInput
          style={{
            backgroundColor: 'lightgrey',
            width: 250,
            fontSize: 18,
            padding: 8,
            borderRadius: 10,
          }}
          placeholder="Your e-mail"
          value={email}
          onChangeText={setEmail}
          email={true}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          alignItems: 'flex-start',
        }}
      >
        <View style={{ padding: 8 }}>
          <Text style={{ fontSize: 18 }}>Password</Text>
        </View>
        <TextInput
          style={{
            backgroundColor: 'lightgrey',
            width: 250,
            fontSize: 18,
            padding: 8,
            borderRadius: 10,
          }}
          placeholder="Your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View
        style={{
          marginTop: 40,
          alignItems: 'flex-start',
        }}
      >
        <Button title="Sign Up" onPress={() => console.log('Signup')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupScreen;