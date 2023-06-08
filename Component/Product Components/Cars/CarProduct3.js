
import { StyleSheet, Text, ScrollView,TouchableOpacity,View,Image,Modal} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
export default function Car() {
    const image3 = {
        uri: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvhsd10tLhu1XzWVo7puMLWFmdkAj5DOPitIqZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snpq6v6ODubLz2aKqfkSPjmB2fJj5DOP5Eagd%25kcWExHWpbl8FO2k3Hy2o24tXATQBrXpFhtAlZ24riIqfJscpF4HvVUo0KiIFJGzYfABHvIT9aqeO2JGvloRyhgpT9GsLx6NUilo90yG1obHsLoAC9BYhJ0yLOEVt7qTACygNS3WmlOECUka5t7sgNEbn%25VP10UkNh5FJhVAbnkq8hGDzOh5nmPmD0agd56reMnTNIu8dtE6Cgk1F7GquAw',
      };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Doom}>Cars</Text>
        <View style={styles.Productalign}>
            <Image source={image3} style={styles.image}></Image>
            <View style={styles.textgap}>
              <Text style={styles.textButton}>BMW I7</Text>
              <Text style={styles.textButton}>50,000,00</Text>
            </View>
        </View>
        <View style={styles.textsetting}>
            <hr/>
        <Text>This Car combines reliability, fuel efficiency, and versatility in one sleek package. With its powerful yet efficient engine, smooth transmission, and comfortable ride, the YBR 125 is designed to conquer both city streets and open roads with ease.</Text>
            <View>
                <ul>
                    <li>Engine: The YBR 125 typically comes with a 125cc, air-cooled, single-cylinder engine. It is known for its smooth performance and fuel efficiency.</li>
                    <li>Fuel System: The bike is equipped with a carburetor for fuel delivery. Newer models might feature fuel injection for enhanced fuel efficiency and performance.</li>
                    <li>Transmission: It usually has a 5-speed manual transmission system, allowing the rider to shift gears smoothly.</li>
                    <li>Lighting: It typically has a halogen headlight for improved visibility at night, along with LED taillights and turn signals for better energy efficiency.</li>
                </ul>
            </View>
        </View>
        <View style={styles.Tab}>
          <TouchableOpacity style={styles.tabbuttons}><Entypo name="home" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabbuttons}><FontAwesome5 name="car-side" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabbuttons}><FontAwesome5 name="motorcycle" size={24} color="white" />
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image:{
    height:100,
    width:160,
    margin:10,
  },
  textButton:{
    
    color: '#001B39',
    textAlign:'center',
    fontWeight:'bold',
  },
  Productalign:{
    flexDirection:'row',
  },
  textgap:{
    marginTop:50,
  },
  textsetting:{
    marginLeft: 10,
    marginRight:10,
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
  },
  Doom: {
    fontSize: 20,
    fontWeight:'bold',
    color:'#FFFFFF',
    backgroundColor:'#001B39',
    paddingLeft:30,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomEndRadius:30,
    borderBottomStartRadius: 30,
  
   },
});
