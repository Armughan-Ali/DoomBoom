import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Doom}>DoomBoom</Text>
      <View style={styles.Views}>
          <TouchableOpacity style={styles.Buttons}>
          <FontAwesome5 name="car" size={40} color="#001B39" />
          <Text style={styles.Text}>Cars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Buttons}>
          <FontAwesome5 name="motorcycle" size={40} color="#001B39" />
          <Text style={styles.Text}>Bikes</Text>
          </TouchableOpacity>
          </View>
        <View style={styles.Tab}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.tabbuttons}><Entypo name="home" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Car')} style={styles.tabbuttons}><FontAwesome5 name="car-side" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Bike')} style={styles.tabbuttons}><FontAwesome5 name="motorcycle" size={24} color="white" />
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 Doom: {
   fontSize: 30,
   fontWeight:'bold',
   color:'#FFFFFF',
   backgroundColor:'#001B39',
   paddingLeft:30,
   paddingTop: 40,
   paddingBottom: 60,
   borderBottomEndRadius:30,
   borderBottomStartRadius: 30,
   marginBottom: 30,
  },
  Views: {
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  Buttons: {
    margin: 10,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9BA1A7',
    borderRadius: 25,
    padding: 20,
    paddingHorizontal: 100,
  },
  Text: {
    color:'#001B39',
    fontWeight:'normal',
  },
  Tab:{
    backgroundColor:'#001B39',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    position:'fixed',
    bottom:0,
  },
  tabbuttons:{
    margin: 10,
  }
});
