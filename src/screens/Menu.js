import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import {withStore} from '../context/AppContext';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonContainer: {
    marginHorizontal: 50,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'rgba(39, 39, 39, 1)',
  },
  buttonTitle: {
    color: '#FFF',
    marginHorizontal: 20,
  },
  lightButton: {
    backgroundColor: '#FFF',
  },
  lightButtonTitle: {
    color: 'rgba(39, 39, 39, 1)',
    marginHorizontal: 20,
  },
});

const Menu = ({navigation, store}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.imageBackground}>
        <Button
          title="Dashboard"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Apptabs')}
        />
      </ImageBackground>
    </View>
  );
};

export default withStore(Menu);
