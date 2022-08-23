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

export default function Login ({ navigation,navigate }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.up}>
                    <Text style={{ fontSize: 25, fontWeight: '500' }}>LOGIN</Text><Separator />
                </View>
                <View style={styles.img}>
                        <Image style={styles.logo} source={require('../assets/logo.jpg')}>
                        </Image>
                    </View>
                <View style={styles.dow}>

                    <View style={styles.tt}>
                        <View style={{ flexDirection: 'row', }}>
                            <TextInput
                                style={styles.textInput}
                                textContentType='emailAddress'
                                keyboardType='email-address'
                                placeholder="USERNAME"
                            >
                            </TextInput><AntDesign name="user" size={27} color="#88cddb" style={{ marginLeft: 25, marginTop: 7, }} />
                        </View><Separator1 />
                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your password"
                                secureTextEntry={true}
                            >
                            </TextInput>
                            <AntDesign name="lock" size={27} color="#88cddb" style={{ marginLeft: 25, marginTop: 7, }} />
                        </View><Separator1 />
                    </View>
                    <View style={styles.bt}>
                        <View style={styles.viewbt}>
                            <Button
                                title="ĐĂNG NHẬP"
                                color='#ffff'
                                onPress={() => navigation.navigate('Home')}
                            />
                        </View>
                        <View style={styles.viewbt}>
                            <Button
                                title="ĐĂNG KÝ"
                                color='#ffff'
                                onPress={() =>
                                    navigation.navigate('Register')
                                }
                            />
                        </View>

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
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    separator: {
        marginVertical: 10,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: 280,
    },
    separator1: {
        marginVertical: 1,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    up: {
        flex: 0.7,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    dow: {
        flex: 9,
        //backgroundColor: '#dce2e3',
    },
    img: {
        //flex: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 30,
    },
    logo: {
        height: 180,
        width: 180,
    },
    tt: {
        //flex: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 20,

    },
    bt: {
        //flex: 2,
        alignItems: 'center',
    },
    textInput: {

        width: 280,
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    viewbt: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        height: 50,
        width: 280,
        backgroundColor: '#88cddb',
        borderRadius: 40,
    },
});
