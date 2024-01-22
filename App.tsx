import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid } from 'react-native';
import * as Font from 'expo-font';

import React, { useEffect, useState } from 'react';
import { RoundedButton } from './src/components/RoundedButton';
import { MyColors } from './src/theme/AppTheme';

async function loadFonts() {
await Font.loadAsync({
'a': require('./assets/font/Montserrat.ttf'),
});
}

export default function App() {
const [fontLoaded, setFontLoaded] = useState(false);
useEffect(() => {
const loadApp = async () => {
await loadFonts();
setFontLoaded(true);
};

loadApp();
}, []);

if (!fontLoaded) {
return
<View style={styles.container} />;
}
return (
<View style={styles.container}>
    <Image source={require('./assets/chef.jpg')} style={styles.imgBackground} />
    <View style={styles.logoContainer}>
        {/*
        <Image style={styles.logoImage} source={require('./assets/logo.png')} /> */}
        <Text style={styles.logoText}>FOOD APP</Text>
    </View>
    <View style={styles.form}>
        <Text style={styles.font}>Ingresar</Text>
        <View style={styles.formInput}>
            <TextInput style={styles.textInput} keyboardType="email-address" placeholder='Correo eléctronico'></TextInput>
            <TextInput style={styles.textInput} placeholder='Contraseña' secureTextEntry={true}></TextInput>
        </View>

        <View style={{marginTop: 20}}>
        <RoundedButton text="ENTRAR"/>
        {/* <Button
          color='orange'
          title='ENTRAR'
          onPress={() => ToastAndroid.show("click", ToastAndroid.SHORT)}
          /> */}
        </View>
        <View style={styles.formRegister}>
          <Text style={{fontFamily: 'a'}}>¿Aún no tienes cuenta? </Text>
          <Text style={styles.formRegisterText}>Registrate</Text>
        </View>
       
    </View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000'
},
imgBackground:{
width: '100%',
height: '100%',
bottom: '30%',
opacity: 0.7
},
form:{
width: '100%',
height: '40%',
backgroundColor: MyColors.background,
position: 'absolute',
bottom: 0,
borderTopLeftRadius: 40,
borderTopRightRadius: 40,
padding: 20,
},
logoContainer:{
position: 'absolute',
alignSelf: 'center',
top: '15%'
},
// logoImage:{
// width: 100,
// height: 100
// },
logoText:{
color: "white",
alignSelf: 'center',
fontSize: 35,
marginTop: 50,
fontWeight: 'bold',
fontStyle: 'italic'
},
font:{
textAlign: "center",
fontFamily: "a",
fontWeight: 'bold',
fontSize: 16
},
textInput:{
color: 'grey',
padding: 10,
width: '100%',
marginTop: 20,
borderRadius: 12,
height: 50,
backgroundColor: "#fff",
fontFamily: 'a'
},

formInput:{
  flexDirection: 'column',
  alignItems: 'center'
},
formIcon:{
  width: 25,
  height: 25,
  marginLeft: 10,
},
formRegister:{
  flexDirection: "row",
  justifyContent: 'center',
  marginTop: 40
},
formRegisterText:{
  fontFamily: 'a',
  color: 'orange',
  fontWeight: 'bold',
  fontStyle: 'italic',
  borderBottomWidth: 1,
  borderBottomColor: 'orange'
}
});
