import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
export default function Screen3() {
  const image = {
    uri: 'https://img.freepik.com/free-vector/group-people-chatting-each-other-using-phone_74855-10709.jpg?w=740&t=st=1685879379~exp=1685879979~hmac=f4b03f42302759025af3a52f471a5793dd82603fe83db3b5423036edf4d65657',
  };
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.text}>Get it on One Click</Text>
        <View style={styles.viewbutton}>
        <TouchableOpacity style={styles.Button}><Text>Back</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Button}><Text>Continue</Text></TouchableOpacity></View>
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
  viewbutton:{
      flexDirection:'row',
  }
});
