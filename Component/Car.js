
import { StyleSheet, Text, ScrollView,TouchableOpacity,View,Image} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
export default function Car() {
  const image1 = {
    uri: 'https://img2.carmax.com/img/vehicles/mmy-toyota-prius-2013/1.jpg?width=900',
  };
  const image2 = {
    uri: 'https://img2.carmax.com/img/vehicles/mmy-kia-stinger-2019/1.jpg?width=900',
  };
  const image3 = {
    uri: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvhsd10tLhu1XzWVo7puMLWFmdkAj5DOPitIqZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snpq6v6ODubLz2aKqfkSPjmB2fJj5DOP5Eagd%25kcWExHWpbl8FO2k3Hy2o24tXATQBrXpFhtAlZ24riIqfJscpF4HvVUo0KiIFJGzYfABHvIT9aqeO2JGvloRyhgpT9GsLx6NUilo90yG1obHsLoAC9BYhJ0yLOEVt7qTACygNS3WmlOECUka5t7sgNEbn%25VP10UkNh5FJhVAbnkq8hGDzOh5nmPmD0agd56reMnTNIu8dtE6Cgk1F7GquAw',
  };
  const image4 = {
    uri: 'https://img2.carmax.com/img/vehicles/mmy-hyundai-sonata-2015/1.jpg?width=900',
  };
  const image5 = {
    uri: 'https://images.wapcar.my/file/92c8e118c5d84f75b94c70be9b4be8d1.jpg',
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Doom}>Cars</Text>
        <View>
         <TouchableOpacity style={styles.choicealign} >
            <Image source={image1} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>Toyota Prius</Text>
              <Text style={styles.textButton}>PKR 27,000,000</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.choicealign} >
            <Image source={image2} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>kia Stringer</Text>
              <Text style={styles.textButton}>PKR 27,000,000</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.choicealign}>
            <Image source={image3} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>BMW I7</Text>
              <Text style={styles.textButton}>PKR 50,000,000</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.choicealign}>
            <Image source={image4} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>Hyundai Sonata</Text>
              <Text style={styles.textButton}>PKR 8,149,000</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.choicealign}>
            <Image source={image5} style={styles.image}></Image>
            <View>
              <Text style={styles.textButton}>Proton X50</Text>
              <Text style={styles.textButton}>PKR 5,000,000</Text>
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
