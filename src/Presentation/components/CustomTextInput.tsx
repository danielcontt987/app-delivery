import React from 'react'
import { View, TextInput, StyleSheet, KeyboardType } from 'react-native'

interface Props{
    placeholder: string,
    value: string,
    keyboardType: KeyboardType ,
    secureTextEntry?:boolean,
    property: string,
    onChangeText: (property: string, value: any) => void 
}

export const CustomTextInput = ({
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText

}: Props) => {
  return (
    <View style={styles.formInput}>
        <TextInput 
            style={styles.textInput} 
            placeholder={placeholder}
            keyboardType={keyboardType} 
            value={value} 
            onChangeText={text => onChangeText(property, text)} 
            secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
        color: 'grey',
        padding: 10,
        width: '100%',
        marginTop: 10,
        borderRadius: 12,
        height: 50,
        backgroundColor: "#fff",
        fontFamily: 'Montserrat'
    },

    formInput: {
        flexDirection: 'column',
        alignItems: 'center'
    },
})
