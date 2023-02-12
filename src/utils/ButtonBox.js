import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SizedBox} from 'sizedbox';


function ButtonBox(props) {
    return(
        <View style={styles.incrementBox}>
        <Text style={[styles.text, {color: '#8D8E98', fontSize: 20}]}>
          {props.Text}
        </Text>
        <Text style={[styles.text, {color: '#FFFFFF', fontSize: 90}]}>
          {props.Number}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
          onPress={props.onPressFunction1}
          >
            <View style={styles.button}>
            <FontAwesome5 name={'minus'} size={30} color={'#8D8E98'} />
            </View>
          </TouchableOpacity>
          <SizedBox horizontal={5}/>
          <TouchableOpacity
          onPress={props.onPressFunction2}
          >
            <View style={styles.button}>
            <FontAwesome5 name={'plus'} size={30} color={'#8D8E98'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'RobotoMono-Regular',
      fontWeight: 'bold',
    },
    incrementBox: {
      width: 175,
      height: '100%',
      padding: 10,
      backgroundColor: '#111428',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 5,
    },
    button: {
      width: 65,
      height: 65,
      backgroundColor: '#1C1F32',
      marginTop: 10,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

export default ButtonBox;