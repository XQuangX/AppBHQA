import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialIcons, Feather, FontAwesome5, Octicons, Fontisto } from '@expo/vector-icons';


export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={{ marginLeft: 10 }}>
          <Image style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }} source={require('../img/logo1.jpg')}>
          </Image>
        </View>
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
        <View style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
          <MaterialIcons name="message" size={30} color="#d1a7cb" />
        </View>
      </View>
      <View style={styles.main}>
        <ScrollView style={styles.scrollView}>
          <ScrollView horizontal contentContainerStyle={{ width: 400 * 2, height: 200, }}>
            <View style={styles.banner}>
              <Image style={{ marginTop: 20, }} source={require('../img/banner1.jpg')}>
              </Image>
            </View>
            <View style={styles.banner}>
              <Image style={{ marginTop: 20, }} source={require('../img/banner2.jpg')}>
              </Image>
            </View>
          </ScrollView>
          <View style={styles.text}>
            <Text style={{ fontSize: 25, fontWeight: '700', marginLeft: 10, }}>Dành Riêng Cho Bạn</Text>
            <AntDesign name="right" size={24} color="black" style={{ marginLeft: 130, }} />
          </View>
          <View style={styles.produck}>
            <View style={styles.produck1}>
              <View style={styles.infoproduck}>
                <Image style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }} source={require('../img/h1.jpg')}>
                </Image>
                <View style={styles.producktitle}>
                  <Text style={styles.styletitle}>Bộ Quần Áo Style hàn quốc</Text>
                  <Text style={styles.title1}><Text style={styles.title2}>399.000 VND </Text>-40%</Text>
                  <Text style={styles.styletitle1}>239.000 VND</Text>
                </View>
              </View>
              <View style={styles.infoproduck}>
                <Image style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }} source={require('../img/h2.jpg')}>
                </Image>
                <View style={styles.producktitle}>
                  <Text style={styles.styletitle}>Bộ Quần Trẻ Chung Hot nhất 2021</Text>
                  <Text style={styles.title1}><Text style={styles.title2}>349.000 VND </Text>-50%</Text>
                  <Text style={styles.styletitle1}>169.000 VND</Text>
                </View>
              </View>
            </View>

            <View style={styles.produck1}>
              <View style={styles.infoproduck}>
                <Image style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }} source={require('../img/h3.jpg')}>
                </Image>
                <View style={styles.producktitle}>
                  <Text style={styles.styletitle}>Bộ Đồ Quần ống rộng áo cách điệu</Text>
                  <Text style={styles.title1}><Text style={styles.title2}>699.000 VND </Text>-30%</Text>
                  <Text style={styles.styletitle1}>489.000 VND</Text>
                </View>
              </View>
              <View style={styles.infoproduck}>
                <Image style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }} source={require('../img/h4.jpg')}>
                </Image>
                <View style={styles.producktitle}>
                  <Text style={styles.styletitle}>Bộ Đồ Quần ống rộng , Quần Lỡ </Text>
                  <Text style={styles.title1}><Text style={styles.title2}>499.000 VND </Text>-10%</Text>
                  <Text style={styles.styletitle1}>449.000 VND</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ height: 3 }}></View>
      <View style={styles.footer}>
        <View style={{ alignItems: 'center', paddingLeft: 5, }}>
          <FontAwesome name="home" size={30} color="#d1a7cb" />
          <Text style={{ color: '#d1a7cb' }}> Trang Chủ </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Produck')} style={{ alignItems: 'center', paddingLeft: 25, }}>
          <FontAwesome5 name="shopify" size={30} color="#828282" />
          <Text style={{ color: '#828282' }}>Sản Phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Giohang')} style={{ alignItems: 'center', paddingLeft: 25, }}>
          <AntDesign name="shoppingcart" size={30} color="#828282" />
          <Text style={{ color: '#828282' }}>Giỏ Hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('userinfor')} style={{ alignItems: 'center', paddingLeft: 25, }}>
          <AntDesign name="profile" size={30} color="#828282" />
          <Text style={{ color: '#828282' }}>Hồ Sơ </Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', paddingLeft: 25, }}>
          <Feather name="grid" size={30} color="#828282" />
          <Text style={{ color: '#828282' }}>Danh mục</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    flex: 0.8,
    backgroundColor: '#e8dbc8',//
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    flex: 8,
    backgroundColor: '#fff',

  },
  footer: {
    flex: 0.7,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 120,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 30,
    marginLeft: 10,
  },
  banner: {
    height: 200,
    backgroundColor: '#e8dbc8',
  },
  text: {
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  produck: {
    //height: 400,
    //backgroundColor: 'red'
  },
  produck: {
    backgroundColor: '#f2f2f2',
    flex: 4.5,
    marginTop: 20,

  },
  produck1: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  infoproduck: {
    width: 180,
    height: 360,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    //alignItems: 'center',
    borderRadius: 10,
  },
  styletitle: {
    marginLeft: 7,
    fontSize: 20,
    marginTop: 7,
    fontWeight: "600",
  },
  styletitle1: {
    marginLeft: 8,
    marginTop: 20,
    fontWeight: '700',
    color: 'red',
    fontSize:18
  },
  title1:{
    color: 'red', 
    fontWeight: '400', 
    marginTop: 8, 
    fontSize: 15, 
    marginLeft: 8
  },
  title2:{
    textDecorationLine: 'line-through', 
    color: 'black',
  },






});
