import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import useRegisterViewModel from './RegisterViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';

export const RegisterScreen = () => {
    const {name, lastname, email, phone, password, confirPassword, onChange, register } = useRegisterViewModel();
    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/chef.jpg')} style={styles.imgBackground} />
            <View style={styles.logoContainer}>
                
            <Image style={styles.logoImage} source={require('../../../../assets/user_image.png')} /> 
                <Text style={styles.logoText}>SELECCIONE UNA IMAGEN</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.font}>Registrate</Text>
                <CustomTextInput 
                    placeholder='Nombre(s)'
                    keyboardType='default'
                    property='name'
                    onChangeText={onChange}
                    value={name}
                />
                <CustomTextInput 
                    placeholder='Apellido(s)'
                    keyboardType='default'
                    property='lastname'
                    onChangeText={onChange}
                    value={lastname}
                />
                <CustomTextInput 
                    placeholder='Correo eléctronico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />
                <CustomTextInput 
                    placeholder='Teléfono'
                    keyboardType='numeric'
                    property='phone'
                    onChangeText={onChange}
                    value={phone}
                />
                <CustomTextInput 
                    placeholder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />
                <CustomTextInput 
                    placeholder='Confirmar contraseña'
                    keyboardType='default'
                    property='confirPassword'
                    onChangeText={onChange}
                    value={confirPassword}
                    secureTextEntry={true}
                />
            
                <View style={{ marginTop: 15 }}>
                    <RoundedButton onPress={() => register()} text="REGISTRAR" />
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

