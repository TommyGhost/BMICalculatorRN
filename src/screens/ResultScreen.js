import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BottomButton from '../utils/BottomButton';

export default function HomeScreen({navigation, route}) {
  const [bmiLevel, setBmiLevel] = useState('');
  const [bmiInfo, setBmiInfo] = useState('');
  const {bmiValue} = route.params;

  useEffect(() => {
    getLevel();
    getInfo();
  }, []);

  const getLevel = () => {
    if (bmiValue >= 25) {
      setBmiLevel('OVERWEIGHT');
    } else if (bmiValue > 18.5) {
      setBmiLevel('NORMAL');
    } else {
      setBmiLevel('UNDERWEIGHT');
    }
  };

  const getInfo = () => {
    if (bmiValue >= 25) {
      setBmiInfo(
        'You have a higher than normal body weight. Please exercise more.',
      );
    } else if (bmiValue > 18.5) {
      setBmiInfo('You have a normal body weight. Good job!');
    } else {
      setBmiInfo('You have a lower than normal body weight. Please eat more');
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.topBody}>
        <View style={styles.textBox}>
          <Text style={[styles.text, {fontSize: 50, color: '#ffffff'}]}>
            Your Result
          </Text>
        </View>
        <View style={styles.infoBox}>
          <View style={{padding: 30}}>
            <Text style={[styles.text, styles.bmiLevel]}>{bmiLevel}</Text>
          </View>
          <View>
            <Text style={[styles.text, styles.bmiValue]}>{bmiValue}</Text>
          </View>
          <View>
            <Text style={[styles.text, {color: '#8E8F9D', fontSize: 30}]}>
              Normal BMI range:
            </Text>
            <Text style={[styles.text, styles.bmiInfo]}>18.5 - 25 kg/m²</Text>
          </View>
          <View style={styles.bmiinfoBox}>
            <Text style={[styles.text, styles.bmiInfo]}>{bmiInfo}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBody}>
        <BottomButton
          onPressFunction={() => {
            navigation.goBack();
          }}
          style={{color: '#FFFFFF'}}
          Text={'RE-CALCULATE YOUR BMI'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBody: {
    flex: 7,
    backgroundColor: '#090C20',
    paddingTop: 35,
    padding: 25,
  },
  bottomBody: {
    flex: 1,
    backgroundColor: '#E62E54',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    height: '10%',
    marginBottom: 20,
  },
  infoBox: {
    height: '85%',
    backgroundColor: '#1E1F33',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bmiinfoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  text: {
    fontFamily: 'RobotoMono-Regular',
    fontWeight: 'bold',
  },
  bmiLevel: {
    color: '#5ABA8F',
    fontSize: 25,
  },
  bmiValue: {
    color: '#FFFFFF',
    fontSize: 145,
  },
  bmiInfo: {
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'center',
  },
  bottomButton: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
