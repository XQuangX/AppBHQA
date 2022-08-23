import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { MaterialIcons, Feather, FontAwesome5, Octicons, Fontisto } from '@expo/vector-icons';



const DATA = [
    {
        id: '1',
        urlimage: require('../img/h1.jpg'),
    },
    {
        id: '2',
        urlimage: require('../img/h2.jpg'),
    },
];

const Item = ({ item, navigation }) => (
    <View >

        <View>
            <Image
                style={styles.tinyLogo}
                source={item.urlimage}
            />
        </View>

    </View>
);

export default function Ctproduck() {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <Item item={item} navigation={navigation} />  /* render navigation*/
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Produck')}>
                    <AntDesign style={{ marginLeft: 5 }} name="arrowleft" size={30} color="#d1a7cb" />
                </TouchableOpacity>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        placeholder="Tìm Kiếm"
                    >
                    </TextInput>
                    <Fontisto name="search" size={20} color="#d1a7cb" style={{ marginRight: 10, }} />
                </View>
                <View style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <AntDesign name="shoppingcart" size={30} color="#d1a7cb" />
                </View>
            </View>
            <View style={styles.main}>
                <ScrollView style={styles.scrollView}>
                    <FlatList horizontal
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <View style={{ width: 380, height: 160, backgroundColor: '#fff' }}>
                        <Text style={{ fontSize: 23, marginLeft: 8, marginTop: 9 }}>[săn L,XL] Bộ quần áo nữ hàn Quốc dáng ngắn siêu dễ thương siêu đẹp siêu sịn</Text>
                        <Text style={{ color: 'red', fontWeight: '400', marginTop: 8, fontSize: 20, marginLeft: 8 }}><Text style={{ textDecorationLine: 'line-through', color: 'black', }}>399.000 VND </Text>-40%</Text>
                        <Text style={{ color: 'red', fontSize: 25, marginTop: 10, marginLeft: 8 }}>239.000 VND</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: '600' }}>Đã bán 80</Text>
                            <AntDesign name="hearto" size={24} color="#3b3b3b" style={{ marginLeft: 150 }} />
                            <FontAwesome name="share" size={24} color="#3b3b3b" style={{ marginLeft: 30 }} />
                            <Fontisto name="messenger" size={24} color="#2a75de" style={{ marginLeft: 30 }} />
                        </View>
                    </View>
                    <View style={{ width: 380, height: 110, backgroundColor: '#fff', marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                            <Text style={{ marginLeft: 8, fontWeight: '500', fontSize: 18 }}>Chọn Loại Hàng (size)</Text>
                            <AntDesign name="right" size={25} color="black" style={{ marginLeft: 180 }} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:70,height:40,backgroundColor:'#d4d4d4',marginLeft:8,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                <Text>Đen M</Text>
                            </View>
                            <View style={{width:70,height:40,backgroundColor:'#d4d4d4',marginLeft:8,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                <Text>Đen L</Text>
                            </View>
                            <View style={{width:50,height:40,backgroundColor:'#d4d4d4',marginLeft:8,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                <Text>+18</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('chat')} style={{ width: 95, height: 61, backgroundColor: '#26aa99', justifyContent: 'center', alignItems: 'center', }}>
                    <Ionicons name="ios-chatbox-ellipses-outline" size={30} color="#fff" />
                </TouchableOpacity>
                <View style={{ width: 1 }}></View>
                <View style={{ width: 95, height: 61, backgroundColor: '#26aa99', justifyContent: 'center', alignItems: 'center', }}>
                    <MaterialIcons name="add-shopping-cart" size={30} color="#fff" />
                </View>
                <View style={{ width: 190, height: 61, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Mua Ngay</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        flex: 0.7,
        backgroundColor: '#e8dbc8',
        flexDirection: 'row',
        alignItems: 'center',
    },
    main: {
        flex: 7,
        backgroundColor: '#dedede',
        flexDirection: 'row',

    },
    footer: {
        flex: 0.7,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center',
        borderRadius: 10,

    },
    input: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 20,
    },
    textInput: {
        width: 200,
        height: 30,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 30,
        marginLeft: 20,
    },
    tinyLogo: {
        height: 350,
        width: 380,
    },
    rangeimg: {
    }
});


