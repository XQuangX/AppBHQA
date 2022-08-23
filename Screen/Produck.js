import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialIcons, Feather, FontAwesome5, Octicons, Fontisto } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Bộ Quần Áo Style hàn quốc',
    subTitle: '399.000 VND',
    subTitle1: '-40%',
    subTitle2: '239.000 VND',
    urlimage: require('../img/h1.jpg'),
  },
  {
    id: '2',
    title: 'Bộ Quần Trẻ Chung Hot nhất 2021',
    subTitle: '349.000 VND',
    subTitle1: '-50%',
    subTitle2: '169.000 VND',
    urlimage: require('../img/h2.jpg'),
  },
  {
    id: '3',
    title: 'Bộ Đồ Quần ống rộng áo cách điệu',
    subTitle: '699.000 VND',
    subTitle1: '-30%',
    subTitle2: '489.000 VND',
    urlimage: require('../img/h3.jpg'),
  },
  {
    id: '4',
    title: 'Bộ Đồ Quần ống rộng , Quần Lỡ',
    subTitle: '499.000 VND',
    subTitle1: '-10%',
    subTitle2: '449.000 VND',
    urlimage: require('../img/h4.jpg'),
  },
  {
    id: '5',
    title: 'Áo Hoodie moden mới nhất 2021',
    subTitle: '349.000 VND',
    subTitle1: '20%',
    subTitle2: '279.000 VND',
    urlimage: require('../img/hoodie12.jpg'),
  },

];

const Item = ({ item, navigation }) => (

  <View style={styles.item}>
    <TouchableOpacity onPress={() => navigation.navigate('Ctproduck', { itemId: item.id })}>
      {/* cột thứ 1 */}
      <View>
        <Image
          style={styles.tinyLogo}
          source={item.urlimage}
        />
      </View></TouchableOpacity>
    {/* cột thứ 2 */}
    <View style={styles.rangeimg}>
    <TouchableOpacity onPress={() => navigation.navigate('Ctproduck')}>
        <Text style={styles.title}>{item.title} </Text>
        <Text style={{ color: 'red', fontWeight: '400', marginTop: 5 }}><Text style={styles.subTitle}>{item.subTitle} </Text>{item.subTitle1}</Text>
        <Text style={styles.title1}>{item.subTitle2} </Text>
      </TouchableOpacity>
      <View style={styles.icontt}>
        <View style={{ width: 50, height: 40, backgroundColor: '#26aa99', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
          <MaterialIcons name="add-shopping-cart" size={27} color="#fff" />
        </View>
        <View style={{ width: 80, height: 40, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginLeft: 5 }}>
          <Text style={{ color: '#fff' }}>Mua Ngay</Text>
        </View>
      </View>
    </View>
  </View>

);

export default function Sanpham() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <Item item={item} navigation={navigation} />  /* render navigation*/
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
      <View style={styles.headerbotom}>
        <View>
          <Image style={{ width: 100, height: 50 }} source={require('../img/sale.jpg')}>
          </Image>
        </View>
        <View style={styles.texttop}>
          <Text style={{ marginLeft: 5 }}>Ưu Đãi</Text>
          <AntDesign style={{ marginLeft: 15 }} name="down" size={15} color="black" />
        </View>
        <View style={styles.texttop}>
          <Text style={{ marginLeft: 20 }}>Giá</Text>
          <AntDesign style={{ marginLeft: 10 }} name="down" size={15} color="black" />
        </View>
        <View style={styles.texttop}>
          <Text style={{ marginLeft: 5 }}>Địa Điểm</Text>
          <AntDesign style={{ marginLeft: 6 }} name="down" size={15} color="black" />
        </View>
      </View>
      <View style={styles.main}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ alignItems: 'center', paddingLeft: 5, }}>
          <FontAwesome name="home" size={30} color="#828282" />
          <Text style={{ color: '#828282' }}> Trang Chủ </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Produck')} style={{ alignItems: 'center', paddingLeft: 25, }}>
          <FontAwesome5 name="shopify" size={30} color="#d1a7cb" />
          <Text style={{ color: '#d1a7cb' }}>Sản Phẩm</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', paddingLeft: 25, }}>
          <AntDesign name="shoppingcart" size={30} color="#828282" />
          <Text style={{ color: '#828282' }}>Giỏ Hàng</Text>
        </View>
        <View style={{ alignItems: 'center', paddingLeft: 25, }}>
          <AntDesign name="profile" size={30} color="#828282" />
          <Text style={{ color: '#828282' }}>Hồ Sơ </Text>
        </View>
        <View style={{ alignItems: 'center', paddingLeft: 25, }}>
          <Feather name="grid" size={30} color="#828282" />
          <Text style={{ color: '#828282' }}>Danh mục</Text>
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
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  headerbotom: {
    flex: 0.7,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  texttop: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#d4d4d4',
    width: 80,
    height: 30,
    marginHorizontal: 6,
    borderRadius: 5,
  },
  icontt: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 60,

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
  item: {
    backgroundColor: '#fff',
    width: 355,
    height: 170,
    marginVertical: 7,
    marginHorizontal: 10,
    flexDirection: "row",
    borderRadius: 10,
    paddingTop: 8,
    paddingLeft: 8,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,

  },
  title1: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    color: 'black',
    fontWeight: '400',
  },
  tinyLogo: {
    height: 150,
    width: 120,
    borderRadius: 10
  },
  rangeimg: {
    paddingLeft: 20,
    paddingTop: 10,
    width: 220,
  }
});


