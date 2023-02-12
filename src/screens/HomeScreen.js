import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import GenderButton from '../utils/GenderButton';
import {Slider} from '@miblanchard/react-native-slider';
import {SizedBox} from 'sizedbox';
import ButtonBox from '../utils/ButtonBox';
import BottomButton from '../utils/BottomButton';

export default function HomeScreen({navigation}) {
  const [isMale, setMale] = useState(false);
  const [isFemale, setFemale] = useState(false);
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(60);
  const [age, setAge] = useState(18);

  const calculate = () => {
    if (isMale || isFemale) {
      let bmi = weight / Math.pow((parseInt(height) / 100).toFixed(2), 2);

      navigation.navigate('Result', {bmiValue: bmi.toFixed(1)});
    } else {
      ToastAndroid.show('Please, Select a gender', ToastAndroid.LONG);
    }
  };

  const malePress = () => {
    setMale(true);
    if (isFemale == true) {
      setFemale(!isFemale);
    }
  };
  const femalePress = () => {
    setFemale(true);
    if (isMale == true) {
      setMale(!isMale);
    }
  };
  const increaseWeight = () => {
    if (weight < 120) {
      setWeight(weight + 1);
    } else {
      setWeight(weight);
    }
  };
  const decreaseWeight = () => {
    if (weight > 1) {
      setWeight(weight - 1);
    } else {
      setWeight(weight);
    }
  };

  const increaseAge = () => {
    if (age < 120) {
      setAge(age + 1);
    } else {
      setAge(age);
    }
  };
  const decreaseAge = () => {
    if (age > 13) {
      setAge(age - 1);
    } else {
      setAge(age);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.topBody}>
        <View style={{flexDirection: 'row', height: '25%', width: '100%'}}>
          <GenderButton
            onPressFunction={malePress}
            condition={isMale}
            name={'male'}
            Text={'MALE'}
          />
          <SizedBox horizontal={5} />
          <GenderButton
            onPressFunction={femalePress}
            condition={isFemale}
            name={'female'}
            Text={'FEMALE'}
          />
        </View>
        <View style={styles.sliderBox}>
          <Text style={[styles.text, {color: '#8D8E98', fontSize: 20}]}>
            HEIGHT
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={[styles.text, {color: '#FFFFFF', fontSize: 90}]}>
              {parseInt(height)}
            </Text>
            <Text style={[styles.text, {color: '#8D8E98', fontSize: 30}]}>
              cm
            </Text>
          </View>
          <View style={styles.slider}>
            <Slider
              trackClickable={true}
              minimumValue={140}
              maximumValue={220}
              value={parseInt(height)}
              onValueChange={value => setHeight(value)}
              thumbTintColor={'#E62E54'}
              minimumTrackTintColor={'#FFFFFF'}
              maximumTrackTintColor={'#888993'}
              thumbTouchSize={{width: 20, height: 10}}
              thumbStyle={styles.thumb}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', height: '35%', width: '100%'}}>
          <ButtonBox
            Text={'WEIGHT'}
            Number={parseInt(weight)}
            onPressFunction1={decreaseWeight}
            onPressFunction2={increaseWeight}
          />
          <SizedBox horizontal={5} />
          <ButtonBox
            Text={'AGE'}
            Number={parseInt(age)}
            onPressFunction1={decreaseAge}
            onPressFunction2={increaseAge}
          />
        </View>
      </View>
      <View style={styles.bottomBody}>
        <BottomButton 
        onPressFunction={calculate}
        style={{color: isMale ? '#FFFFFF' : isFemale ? '#FFFFFF' : '#8D8E98',}}
        Text={'CALCULATE YOUR BMI'}
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
  text: {
    fontFamily: 'RobotoMono-Regular',
    fontWeight: 'bold',
  },
  sliderBox: {
    width: '100%',
    height: '30%',
    marginVertical: 30,
    padding: 10,
    backgroundColor: '#111428',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
  },
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 320,
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 30,
    shadowColor: '#E62E54',
    elevation: 10,
  },
  bottomButton: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
