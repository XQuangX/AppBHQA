import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';


const Separator = () => (
    <View style={styles.separator} />
);
const Separator1 = () => (
    <View style={styles.separator1} />
);


const Register = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                
                <View style={styles.dow1}>
                    <View style={styles.input}>
                        <AntDesign name="user" size={27} color="#88cddb" style={{ marginRight: 5, marginTop: 7, }} />
                        <TextInput
                            style={styles.textInput}
                            textContentType='emailAddress'
                            keyboardType='email-address'
                            placeholder="USERNAME"
                        //backgroundColor="red"
                        >
                        </TextInput>
                    </View><Separator1 />
                    <View style={styles.input}>
                        <AntDesign name="lock" size={27} color="#88cddb" style={{ marginRight: 5, marginTop: 7, }} />
                        <TextInput
                            style={styles.textInput}
                            placeholder=" password"
                            secureTextEntry={true}
                        >
                        </TextInput>
                    </View><Separator1 />
                    <View style={styles.input}>
                        <MaterialCommunityIcons name="email-outline" size={27} color="#88cddb" style={{ marginRight: 5, marginTop: 7, }} />
                        <TextInput
                            style={styles.textInput}
                            textContentType='emailAddress'
                            keyboardType='email-address'
                            placeholder="Email"
                        >
                        </TextInput>
                    </View><Separator1 />
                    <View style={styles.input}>
                        <AntDesign name="phone" size={27} color="#88cddb" style={{ marginRight: 5, marginTop: 7, }} />
                        <TextInput
                            style={styles.textInput}
                            textContentType='emailAddress'
                            keyboardType='default'
                            placeholder="Mobile Number"
                        >
                        </TextInput>
                    </View><Separator1 />
                </View>
                <View style={styles.dowbt}>
                    <View style={styles.viewbt}>
                        <Button
                            title="ĐĂNG KÝ"
                            color='#ffff'
                            onPress={() =>navigation.navigate('Login')}
                        />
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    up: {
        alignItems: 'center',
        flex: 0.7,
        backgroundColor: '#e3e3e3',
        flexDirection: 'row',
    },
    dow: {
        flex: 1.2,
        backgroundColor: '#e3e3e3',
        alignItems: 'center',
    },
    dow1: {
        flex: 4,
        backgroundColor: '#e3e3e3',
        paddingHorizontal: 10,

    },
    dowbt: {
        flex: 3,
        backgroundColor: '#e3e3e3',
        paddingHorizontal: 10,
        alignItems:'center',
    },
    separator: {
        marginVertical: 10,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: 200,
    },
    separator1: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    input: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    textInput: {
        width: 280,
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 6,

    },
    viewbt:{
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:20,
        height:50,
        width:300,
        backgroundColor:'#88cddb',
        borderRadius:30,
    },
});
export default Register ;
