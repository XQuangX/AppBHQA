import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialIcons, Feather } from '@expo/vector-icons';


export default function Thanhtoan({navigation,navigate}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.infocontainer}>
                    <View style={styles.logo}>
                        <AntDesign name="check" size={80} color="#fff" />
                    </View>
                    <View style={styles.title}>
                        <Text style={{ fontWeight: '700', fontSize: 35, marginBottom: 20, color: '#2f355e', }}>THÀNH CÔNG </Text>
                        <Text style={{ fontWeight: '500', fontSize: 15, marginBottom: 5, }}>Đơn hàng đã được thêm thành công </Text>
                        <Text style={{ fontWeight: '500', fontSize: 15, marginBottom: 5, }}>Đê kiểm tra thông tin vui lòng truy cập " Đơn</Text>
                        <Text style={{ fontWeight: '500', fontSize: 15, marginBottom: 5, }}>hàng của tôi " trong tab " Hồ sơ cá nhân "</Text>
                    </View>
                    <View style={styles.button}>
                        <View style={styles.fixbutton}>
                            <Button 
                                title="Đơn hàng của tôi"
                                color='#ffff'
                                onPress={() =>navigation.navigate('Giohang')}
                            />
                            <AntDesign name="rightcircleo" size={30} color="black" style={{ paddingTop: 3, color: '#ffff',paddingLeft:30,}} />
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
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infocontainer: {
        width: 350,
        height: 400,
        backgroundColor: '#ffff',
        alignItems: 'center',
    },
    logo: {
        height: 130,
        width: 130,
        backgroundColor: '#55ed8d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    title: {
        alignItems: 'center',
        marginTop: 40,
    },
    fixbutton: {
        flexDirection: 'row',
        //justifyContent: 'center',
        backgroundColor: '#fa5f62',
        height: 50,
        width: 230,
        borderRadius: 30,
        paddingTop: 5,
        paddingLeft:20,
    },
    button:{
        marginTop:50,
    },
});
