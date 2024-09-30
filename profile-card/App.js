import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.profileAvatar}
            //source={{ uri: '' }}
            source={require('./assets/img/user.png')}
            alt='Profile User'
          />
          <Text style={styles.profileName}>John Davis</Text>
          <Text style={styles.profileEmail}>johndavis@mail.com</Text>
          
          <TouchableOpacity
            onPress={() =>{
              //action
            }}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>
                Edit Profile
              </Text>
              <FeatherIcon name="edit" color="#fff" size={16} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    flex: 1,
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909'
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: '400',
    color: '#848484'
  },
  profileAction: {
    margin: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
});
