import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
export default function Screen2() {
  const image = {
    uri: 'https://img.freepik.com/free-vector/vehicle-sale-concept-illustration_114360-2082.jpg?size=626&ext=jpg&ga=GA1.1.374823830.1685374953&semt=ais',
  };
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.text}>Is it Affordable or where to access good price</Text>
        <View style={styles.tabbutton}>
          <TouchableOpacity style={styles.Button}><Text>Back</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Button}><Text>Next</Text></TouchableOpacity>
        </View>
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
  image:{
      height: 200,
      width: '100%',
      marginBottom: 20,
      
  },
  text:
  {
    color:'#001B39',
    fontSize: 12,
    textAlign:'Center',
    fontWeight: 'bold',
    marginBottom: 80,
  },
  Button:{
    backgroundColor:'#D9D9D9',
    color:'#001B39',
    padding: 5,
    paddingHorizontal:30,
    borderRadius:25,
    marginHorizontal:30,
    
  },
  tabbutton:{
    flexDirection:'row',
  }
});
