import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';
  import StartNav from './StartNav';
  
  const image = {
      uri: 'https://img.freepik.com/free-vector/navy-blue-geometrical-patterned-mobile-wallpaper_53876-116854.jpg',
    };
  
  export default function Appdisplay({navigation}) {
    
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.Image}>
          <Text style={styles.Text1}>DOOMBOOM</Text>
          <Text style={styles.Text2}>Know Your Type Cars and Bikes</Text>
            <TouchableOpacity style={styles.Button} onPress={() => (navigation.navigate('Onboard'))}>
              <Text>Get Started</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222222',
    },
    Text1: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FFFFFF',
      paddingLeft: 40
    },
    Text2: {
        fontSize: 15,
        fontWeight: 400,
        color: '#FFFFFF',
        paddingBottom: 30,
        paddingLeft: 40
    },
    Button: {
      backgroundColor: '#D9D9D9',
      borderRadius: 25,
      textAlign: 'center',
      justifyContent:'center',
      padding: 10,
      margin: 50,
    },
    Image: {
      width: '100%',
      height:'100%',
      flex: 1,
      justifyContent: 'center',
    },
  });