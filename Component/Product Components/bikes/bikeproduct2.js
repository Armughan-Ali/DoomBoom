
import { StyleSheet, Text, ScrollView,TouchableOpacity,View,Image,Modal} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
export default function Bike() {
    const image2 = {
        uri: 'https://startuppakistan.com.pk/wp-content/uploads/2022/01/honda-cbr500r-abs-2021-lauch-date-price-specs-1536x1023.jpeg.webp',
      };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Doom}>Bikes</Text>
        <View style={styles.Productalign}>
            <Image source={image2} style={styles.image}></Image>
            <View style={styles.textgap}>
              <Text style={styles.textButton}>Honda CBR 500</Text>
              <Text style={styles.textButton}>PKR 1250,00</Text>
            </View>
        </View>
        <View style={styles.textsetting}>
            <hr/>
        <Text>Motorbike that combines reliability, fuel efficiency, and versatility in one sleek package. With its powerful yet efficient engine, smooth transmission, and comfortable ride, the YBR 125 is designed to conquer both city streets and open roads with ease.</Text>
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
