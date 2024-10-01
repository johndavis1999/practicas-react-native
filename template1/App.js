import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import Card from './components/Card';

const url = "http://127.0.0.1:8000/api/products";

export default function App() {

  const [productos, setProductos] = useState([]);

  useEffect(() =>{
    getProductos();
  }, []);

  const getProductos = async() => {
    try{
      const { data } = await axios.get(url);
      const { productos } = { data };
      setProductos(productos);
      console.log(data)
    }catch(error){
      console.error("Error al obtener los productos:", error);
    }
  }

  const renderItem = ( { item } ) => (
    <Card 
      description={item.description} 
      price={item.price} 
      stock={item.stock} 
    />

  )
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2, backgroundColor: 'steelblue' }}>
        <Text style={styles.title}>Productos</Text>
      </View>
      <FlatList 
        data={productos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
