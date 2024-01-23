import React from 'react'
import { View, Text, Image } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import useRegisterViewModel from './RegisterViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

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

