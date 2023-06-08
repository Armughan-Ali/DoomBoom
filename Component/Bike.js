
import { StyleSheet, Text, ScrollView,TouchableOpacity,View,Image,Modal} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
export default function Bike() {
  const image1 = {
    uri: 'https://motobanda.pl/uploads/motors/336/2014YamahaYBR125EURedSpiritStudio002-600x400.jpg',
  };
  const image2 = {
    uri: 'https://startuppakistan.com.pk/wp-content/uploads/2022/01/honda-cbr500r-abs-2021-lauch-date-price-specs-1536x1023.jpeg.webp',
  };
  const image3 = {
    uri: 'https://imgd.aeplcdn.com/664x374/bw/models/suzuki-m800-intruder-147.jpg?20190103151915&q=75',
  };
  const image4 = {
    uri: 'https://startuppakistan.com.pk/wp-content/uploads/2022/01/2021-kawasaki-ninja-zx-14r-specs-features-photo.jpeg.webp',
  };
  const image5 = {
    uri: 'https://startuppakistan.com.pk/wp-content/uploads/2022/01/first-ride-2004-bmw-k1200s-or-visordown.jpeg.webp',
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Doom}>Bikes</Text>
        <View>
         <TouchableOpacity style={styles.choicealign} >
            <Image source={image1} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>Yamaha YBR 125</Text>
              <Text style={styles.textButton}>PKR 2,625,000</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.choicealign} onPress={Bike1Model2}>
            <Image source={image2} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>Honda CBR 500</Text>
              <Text style={styles.textButton}>PKR 1250,00</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.choicealign} onPress={Bike1Model3}>
            <Image source={image3} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>Intruder M800</Text>
              <Text style={styles.textButton}>PKR 17 00,00</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.choicealign} onPress={Bike1Model4}>
            <Image source={image4} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>Ninja ZX- 14R</Text>
              <Text style={styles.textButton}>PKR 1,105,70</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.choicealign} onPress={Bike1Model5}>
            <Image source={image5} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>BMW K 1200 S</Text>
              <Text style={styles.textButton}>PKR 1,915,62</Text>
            </View>
         </TouchableOpacity>

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
  Doom: {
   fontSize: 30,
   fontWeight:'bold',
   color:'#FFFFFF',
   backgroundColor:'#001B39',
   paddingLeft:30,
   paddingTop: 30,
   paddingBottom: 50,
   borderBottomEndRadius:30,
   borderBottomStartRadius: 30,
   marginBottom: 30,
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
  choicealign:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#9BA1A7',
    borderRadius: 25,
    marginTop:-5,
    margin:10,
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
});
