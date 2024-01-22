import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/chef.jpg')} style={styles.imgBackground} />
            <View style={styles.logoContainer}>
                
            <Image style={styles.logoImage} source={require('../../../assets/user_image.png')} /> 
                <Text style={styles.logoText}>SELECCIONE UNA IMAGEN</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.font}>Registrate</Text>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} keyboardType="email-address" placeholder='Nombre(s)'></TextInput>
                    <TextInput style={styles.textInput} placeholder='Apellido(s)'></TextInput>
                    <TextInput style={styles.textInput} keyboardType="email-address" placeholder='Correo eléctronico'></TextInput>
                    <TextInput style={styles.textInput} keyboardType="numeric" placeholder='Teléfono' ></TextInput>
                    <TextInput style={styles.textInput} placeholder='Contraseña' secureTextEntry={true}></TextInput>
                    <TextInput style={styles.textInput} placeholder='Confirmar contraseña' secureTextEntry={true}></TextInput>
                </View>

                <View style={{ marginTop: 15 }}>
                    <RoundedButton onPress={() => ToastAndroid.show("Hola", ToastAndroid.SHORT)} text="CONFIRMAR" />
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
    imgBackground: {
        width: '100%',
        height: '100%',
        bottom: '30%',
        opacity: 0.7
    },
    form: {
        width: '100%',
        height: '70%',
        backgroundColor: MyColors.background,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: "center"
    },
    logoImage:{
    width: 100,
    height: 100
    },
    logoText: {
        color: "white",
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
    },
    font: {
        textAlign: "center",
        fontFamily: "a",
        fontWeight: 'bold',
        fontSize: 16
    },
    textInput: {
        color: 'grey',
        padding: 10,
        width: '100%',
        marginTop: 15,
        borderRadius: 12,
        height: 50,
        backgroundColor: "#fff",
        fontFamily: 'a'
    },

    formInput: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    formIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
    },
    formRegister: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 40
    },
    formRegisterText: {
        fontFamily: 'a',
        color: 'orange',
        fontWeight: 'bold',
        fontStyle: 'italic',
        borderBottomWidth: 1,
        borderBottomColor: 'orange'
    }
});

