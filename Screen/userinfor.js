import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialIcons, Feather, FontAwesome5, Octicons, Fontisto } from '@expo/vector-icons';

const Separator1 = () => (
    <View style={styles.separator1} />
);


export default function userinfor({ navigation, }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View  style={styles.header}>
                        <TouchableOpacity onPress={() =>navigation.navigate('Home')} style={{ flex: 0.5, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', }}>
                            <AntDesign name="left" size={30} color="#4385f7" />
                            <Text style={{ fontSize: 20, fontWeight: "600", color: '#4385f7' }}> Quay lại</Text>
                        </TouchableOpacity>

                    <View style={{ flex: 2, backgroundColor: '#fff' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={{ marginTop: 15, height: 100, width: 100, borderRadius: 100, }} source={require('../assets/user.jpg')}>
                            </Image>
                            <Text style={{ fontSize: 25, fontWeight: '700', marginTop: 10 }}>Ngọc Hà </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.main}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.viewinput}>
                            <View style={styles.input}>
                                <AntDesign name="user" size={27} color="#88cddb" style={{ marginRight: 5, marginTop: 7, }} />
                                <TextInput
                                    style={styles.textInput}
                                    textContentType='emailAddress'
                                    keyboardType='email-address'
                                    placeholder="Facebook ID"
                                //backgroundColor="red"
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
                                <FontAwesome5 name="map-marker-alt" size={27} color="#88cddb" style={{ marginRight: 5, marginTop: 7, }} />
                                <TextInput
                                    style={styles.textInput}
                                    textContentType='emailAddress'
                                    keyboardType='default'
                                    placeholder="Địa chỉ"
                                >
                                </TextInput>
                            </View><Separator1 />

                        </View>

                        <View style={styles.button}>
                            <View style={{ marginTop: 7, }}>
                                <Button
                                    title="ĐĂNG XUẤT "
                                    color="#fff"
                                    onPress={() => navigation.navigate('Home')}
                                />
                            </View>

                        </View>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <View style={{ alignItems: 'center', paddingLeft: 5, }}>
                        <FontAwesome name="home" size={30} color="black" />
                        <Text style={{ color: 'black' }}> Trang Chủ </Text>
                    </View>
                    <View style={{ alignItems: 'center', paddingLeft: 25, }}>
                        <Feather name="search" size={30} color="black" />
                        <Text style={{ color: 'black' }}>Tìm Kiếm</Text>
                    </View>
                    <View style={{ alignItems: 'center', paddingLeft: 25, }}>
                        <AntDesign name="shoppingcart" size={30} color="black" />
                        <Text style={{ color: 'black' }}>Giỏ Hàng</Text>
                    </View>
                    <View style={{ alignItems: 'center', paddingLeft: 25, }}>
                        <AntDesign name="profile" size={30} color="red" />
                        <Text style={{ color: 'red' }}>Hồ Sơ </Text>
                    </View>
                    <View style={{ alignItems: 'center', paddingLeft: 25, }}>
                        <Feather name="grid" size={30} color="black" />
                        <Text style={{ color: 'black' }}>Cấu Hình</Text>
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
    header: {
        flex: 3,
        backgroundColor: '#fff',
    },
    main: {
        flex: 6,
        backgroundColor: '#d4d4d4',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    viewinput: {
        width: 360,
        height: 250,
        backgroundColor: '#fff',
        marginTop: 50,
        borderRadius: 10,
        marginBottom: 20,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft:10,
    },
    textInput: {
        marginTop: 10,
        marginLeft: 10
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: 'red',
        marginLeft: 50,
        borderRadius: 15,
        marginTop: 10,
    },


    separator1: {
        marginVertical: 1,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
