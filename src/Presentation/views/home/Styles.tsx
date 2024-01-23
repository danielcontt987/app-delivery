import {StyleSheet} from 'react-native';
import { MyColors } from '../../theme/AppTheme';

const HomeStyles = StyleSheet.create({
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
        fontFamily: "Montserrat",
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
        fontFamily: 'Montserrat'
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
        fontFamily: 'Montserrat',
        color: 'orange',
        fontWeight: 'bold',
        fontStyle: 'italic',
        borderBottomWidth: 1,
        borderBottomColor: 'orange'
    }
});

export default HomeStyles;