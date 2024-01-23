import React, { useEffect, useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useHomeViewModel from './HomeViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';

export const HomeScreen = () => {

    const { email, password, onChange } = useHomeViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/chef.jpg')} style={styles.imgBackground} />
            <View style={styles.logoContainer}>
                {/*
            <Image style={styles.logoImage} source={require('./assets/logo.png')} /> */}
                <Text style={styles.logoText}>FOOD APP</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.font}>Ingresar</Text>

                <CustomTextInput 
                    placeholder='Correo electronico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />

                <CustomTextInput 
                    placeholder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <View style={{ marginTop: 20 }}>
                    <RoundedButton onPress={() => {
                        console.log(email);
                        console.log(password);

                    }} text="ENTRAR" />
                </View>
                <View style={styles.formRegister}>
                    <Text style={{ fontFamily: 'a' }}>¿Aún no tienes cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterSreen')}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
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
        height: '40%',
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
        top: '15%'
    },
    // logoImage:{
    // width: 100,
    // height: 100
    // },
    logoText: {
        color: "white",
        alignSelf: 'center',
        fontSize: 35,
        marginTop: 50,
        fontWeight: 'bold',
        fontStyle: 'italic'
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
        marginTop: 20,
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
