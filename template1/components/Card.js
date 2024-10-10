import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

function Card({ description, price }) {
  
    return (
      <View style={styles.cardView}>
        <Text style={{fontSize:18}}>Descripcion: {description}</Text>
        <Text style={{fontSize:18}}>Precio: {price}</Text>
        <View style={{ flexDirection: 'row-reverse' }}>
          <TouchableOpacity 
            onPress={props.mypress.bind(this, props)}
          >
            <Ionicons name='md-trash' size={36} color={'#F1113D'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        marginVertical:5,
        marginHorizontal:9,
        alignSelf:'stretch',
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        alignSelf:'stretch',

      },
  });
  export default Card;