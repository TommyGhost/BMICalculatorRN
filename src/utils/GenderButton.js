import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const GenderButton = (props) => {
  
  return (
    <TouchableOpacity onPress={props.onPressFunction}>
      <View style={styles.genderbox}>
        {props.condition ? (
          <View style={{alignItems: 'center'}}>
            <FontAwesome5 name={props.name} size={80} color={'#FFFFFF'} />
            <Text style={[styles.text, {color: '#FFFFFF', fontSize: 30}]}>
              {props.Text}
            </Text>
          </View>
        ) : (
          <View style={{alignItems: 'center'}}>
            <FontAwesome5 name={props.name} size={60} color={'#8D8E98'} />
            <Text style={[styles.text, {color: '#8D8E98', fontSize: 20}]}>
              {props.Text}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    text: {
      marginTop: 20,
      fontFamily: 'RobotoMono-Regular',
      fontWeight: 'bold',
    },
    genderbox: {
      width: 175,
      height: '100%',
      backgroundColor: '#1D1F33',
    //   marginHorizontal: 3,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
  });
  


export default GenderButton;