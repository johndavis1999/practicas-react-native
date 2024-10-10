import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios, { Axios } from 'axios';
import Card from './components/Card';
import Input from './components/Input';
import { TouchableOpacity } from 'react-native';

const url = "http://192.168.56.216:8000/api/products";

export default function App() {

  const [productos, setProductos] = useState([]);
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')


  useEffect(() =>{
    getItems();
  }, []);

  const getItems = async() => {
    try{
      const { data } = await axios.get(url);
      const { productos } = { data };
      setProductos(data);
      console.log(data)
    }catch(error){
      console.error("Error al obtener los productos:", error);
    }
  }

  const addItem = async() => {
    const obj = { description: description, price: price, stock: stock };
    try{
      const response = await axios.post(url, obj);
      alert('Item creadocorrectamente');
      getItems();
    }catch(error){
      alert('Error al crear');
    }
    setDescription('');
    setPrice('');
    setStock('');
  }

  const deleteItem = async(props) => {
    const id = props.id;
    const response = await axios.delete(url+'/'+id);
    getItems();
  }

  const renderItem = ( { item } ) => (
    <Card 
      id={item.id}
      description={item.description} 
      price={item.price} 
      stock={item.stock} 
      mypress={deleteItem}
    />

  )
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, marginTop: 20, marginBottom: 25}}>
        <Text style={{ fontWeight: 'bold', color: '#0E69E5', fontSize: 20 }}>APP React Native</Text>
      </View>

      <Input texto={'Descripcion'} valor={description} campo={ (e)=> setDescription(e.target.value) } />
      <Input texto={'Precio'} valor={price} campo={ (e)=> setPrice(e.target.value) }  />
      <Input texto={'Stock'} valor={stock} campo={ (e)=> setStock(e.target.value) }  />
      
      <TouchableOpacity
        style={{ backgroundColor: '#0E69E5', padding: 15, borderRadius: 12 }}
        onPress={addItem}
      >
        <Text style={{ color: '#fff' }}>Agregar</Text>
      </TouchableOpacity>
      
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
  },
  title: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 18,
    color: '#fff',
  }
});
