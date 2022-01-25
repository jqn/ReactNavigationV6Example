/* eslint-disable react-native/no-raw-text */
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {TextInput} from '../components/Form';
import {Button} from '../components/Button';

import colors from '../constants/colors';

import {withStore} from '../context/AppContext';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
  },
});

const SignIn = ({navigation, store, syncStore}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const submit = () => {
    setErrors({});
    try {
      if (email && password) {
        syncStore({...store, loggedIn: true, permissions: {settings: true}});
      }
    } catch (error) {
      setErrors();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        label="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={text => setEmail(text)}
        errorText={errors.email}
      />
      <TextInput
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={text => setPassword(text)}
        // errorText={errors.password || signin?.error?.message}
      />
      <Button onPress={submit}>Sign In</Button>
    </ScrollView>
  );
};

export default withStore(SignIn);
