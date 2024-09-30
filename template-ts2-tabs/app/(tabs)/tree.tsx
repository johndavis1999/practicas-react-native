
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image }from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

const items = [
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 1',
    cal: 22,
    duration: 10,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 2',
    cal: 22,
    duration: 20,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 3',
    cal: 52,
    duration: 10,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 4',
    cal: 18,
    duration: 20,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 5',
    cal: 30,
    duration: 60,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 6',
    cal: 8,
    duration: 9,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 7',
    cal: 50,
    duration: 10,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 8',
    cal: 30,
    duration: 20,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 1',
    cal: 22,
    duration: 10,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 2',
    cal: 22,
    duration: 20,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 3',
    cal: 52,
    duration: 10,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 4',
    cal: 18,
    duration: 20,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 5',
    cal: 30,
    duration: 60,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 6',
    cal: 8,
    duration: 9,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 7',
    cal: 50,
    duration: 10,
  },
  {
    img: './assets/img/user.png',
    name: 'Ejercicio 8',
    cal: 30,
    duration: 20,
  },
]

export default function TabTreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Tree</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titleCard}>Dia 1 X</Text>
          {items.map(( { name, img, cal, duration }, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                //action
              }}
            >
              <View style={styles.card}>
                <Image 
                  resizeMode='cover'
                  style={styles.cardImg}
                  alt={name}
                  source={{ uri: './assets/img/user.png' }} 
                  //source={{ uri: img }} 
                />
                <View>
                  <Text style={styles.cardTitle}>{name}</Text>
                  <View style={styles.cardStats}>
                    <View style={styles.cardStatsItem}>
                      <Text style={styles.cardStatsItemText}>
                        {duration} mins
                      </Text>
                    </View>
                    <View style={styles.cardStatsItem}>
                      <Text style={styles.cardStatsItemText}>
                        {cal} cals
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cardAction}>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  titleCard: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardImg: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    marginRight: 12,
  },
  cardTitle:{
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  cardStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardStatsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  cardStatsItemText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#636a73',
    marginLeft: 2,
  },
  cardAction: {
    marginLeft: 'auto',
  },
});
