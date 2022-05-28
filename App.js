import React from 'react';
import {TextInput, RadioButton, Button} from 'react-native-paper';
import {StyleSheet, Text, View, Switch} from 'react-native';
import img from './Stroke-1.png';
import img2 from './Stroke.png';

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
  return (
    <View style={styles.container}>
      <Button
        style={styles.nav}
        icon={img}
        mode="text"
        onPress={() => console.log('Pressed')}></Button>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.maincontainer}>
        <View style={styles.innercontainer}>
          <Text style={styles.keys}>Push Notifications</Text>
          <Switch
            trackColor={{false: '#DBDDEC', true: '#DBDDEC'}}
            thumbColor={isSwitchOn ? '#f5d' : '#FFFFFF'}
            ios_backgroundColor="#000"
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
          />
        </View>
        <View style={styles.innercontainer}>
          <Text style={styles.keys}>About Brand Wallet</Text>
          <Button
            style={styles.button}
            icon={img2}
            mode="text"
            onPress={() => console.log('Pressed')}></Button>
        </View>
        <View style={styles.innercontainer}>
          <Text style={styles.keys}>Terms & Conditions</Text>
          <Button
            style={styles.button}
            icon={img2}
            mode="text"
            onPress={() => console.log('Pressed')}></Button>
        </View>
        <View style={styles.innercontainer}>
          <Text style={styles.keys}>Privacy Policy</Text>
          <Button
            style={styles.button}
            icon={img2}
            mode="text"
            onPress={() => console.log('Pressed')}></Button>
        </View>
        <View style={styles.innercontainer}>
          <Text style={styles.keys}>Need Help?</Text>
          <Button
            style={styles.button}
            icon={img2}
            mode="text"
            onPress={() => console.log('Pressed')}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffff',
  },
  text: {
    height: 70,
    fontWeight: '700',
    fontFamily: 'Inter',
    fontSize: 30,
    color: '#000',
  },
  button: {
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  innercontainer: {
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    height: 50,
    color: '#303240',
    fontWeight: '500',
  },
  nav: {
    height: 40,
    color: '#000',
    alignSelf: 'flex-start',
    position: 'relative',
    right: 18,
  },
  keys: {
    color: '#303240',
  },
});

export default App;
