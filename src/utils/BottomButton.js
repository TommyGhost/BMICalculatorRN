import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';


function BottomButton(props) {
    return(
        <TouchableOpacity
        onPress={props.onPressFunction}
        >
          <View style={styles.bottomButton}>
            <Text style={[styles.text, props.style]}>
              {props.Text}
            </Text>
          </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'RobotoMono-Regular',
      fontWeight: 'bold',
      fontSize: 30,
    },
    bottomButton: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });

export default BottomButton;