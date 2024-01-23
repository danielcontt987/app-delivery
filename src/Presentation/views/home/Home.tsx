import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useHomeViewModel from './HomeViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

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
                    <Text style={{ fontFamily: 'Montserrat' }}>¿Aún no tienes cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterSreen')}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}


