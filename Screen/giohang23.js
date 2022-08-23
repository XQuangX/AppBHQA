import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image, Button, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, MaterialIcons, FontAwesome, Fontisto, FontAwesome5, Ionicons } from '@expo/vector-icons';
const Separator = () => (
  <View style={styles.separator} />
);

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function giohang23({ navigation }) {
  const [count, setCount] = useState(1);
  const handleCountMin = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleCountMax = () => {
    setCount(count + 1);
  };
  const [count1, setCount1] = useState(2);
  const handleCountMin1 = () => {
    if (count1 > 1) {
      setCount1(count1 - 1);
    }
  };
  const handleCountMax1 = () => {
    setCount1(count1 + 1);
  };
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ backgroundColor: '#F0F0F0', flexDirection: 'row', flex: 0.1, width: '100%' }}>
        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10, width: '35%' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <AntDesign name="arrowleft" size={30} color="#d1a7cb" />
          </TouchableOpacity>

          <Text style={{ color: '#D07DCF', fontSize: 22, fontWeight: 'bold', marginLeft:10,marginTop:4 }}>Giỏ hàng</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 60, width: '100%' }}>
          <Feather name="search" size={27} color="#D07DCF" style={{ marginLeft: 20 }} />
          <AntDesign name="home" size={27} color="#D07DCF" style={{ marginLeft: 20 }} />
          <MaterialIcons name="chat" size={27} color="#D07DCF" style={{ marginLeft: 20 }} />
        </View>

      </View>

      <ScrollView style={styles.scrollView}>
        <View>
          <View style={{ backgroundColor: '#F0F0F0' }}>
            <View style={{ flexDirection: 'row', marginTop: 10, }}>
              <FontAwesome name="user" size={17} color="black" style={{ marginLeft: 20 }} />
              <Text style={{ fontSize: 15, marginLeft: 25, color: '#878787' }}>Ngô Xuân Quang</Text>
              <AntDesign name="right" size={17} color="black" style={{ marginLeft: 220 }} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <MaterialIcons name="phone-in-talk" size={20} color="black" style={{ marginLeft: 20 }} />
              <Text style={{ marginLeft: 20, fontSize: 15, color: '#878787' }}>0978553105</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Fontisto name="home" size={17} color="black" style={{ marginLeft: 20 }} />
              <Text style={{ marginLeft: 20, fontSize: 15, color: '#878787' }}>Số 467 Phạm Văn Đồng TP Hà Nội</Text>

            </View>
            <Separator />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15, }}>
            <FontAwesome5 name="store" size={24} color="#D07DCF" style={{ marginLeft: 15, }} />
            <Text style={{marginHorizontal:10,marginTop:6,fontWeight:"600" }}>Xuân Quang</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, }}>
            <View>
              <AntDesign name="checkcircle" size={24} color="#D07DCF" style={{ marginLeft: 20, marginTop: 50, }} />
            </View>
            <View>
              <Image
                style={{ marginLeft: 20, borderRadius: 20 }}
                source={require('../assets/anh1.png')}
              />
            </View>
            <View style={{ marginLeft: 10, marginBottom: 30, flexDirection: 'column' }}>
              <Text >Áo kẻ dài tay-Striped </Text>

              <View style={{ flexDirection: 'row', marginTop: 3 }}>

                <Text style={{ marginTop: 10, color: '#4F4F4F' }}>Màu sắc:</Text>
                <Text style={{ marginTop: 10, color: '#B1B1B1' }}>Xanh lá</Text>
              </View>
              <Text style={{ color: '#B1B1B1' }} >Size:S</Text>
              <Text style={{ color: '#B1B1B1', textDecorationLine: 'line-through' }}>200.000 đ</Text>
              <Text style={{ color: '#3A3A3A' }}>70.000 đ</Text>


            </View>
            <Feather name="x" size={24} color="#D1D1D1" style={{ marginLeft: 40 }} />

          </View>
          <View style={{ width: 30, flexDirection: 'row', width: 80, height: 30, backgroundColor: '#EFEFEF', marginLeft: 180, borderRadius: 20 }}>
            <TouchableOpacity onPress={handleCountMin}>
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>

            <Text style={{ fontSize: 19, marginLeft: 5 }}>{count}</Text>
            <TouchableOpacity onPress={handleCountMax}>
              <Ionicons name="add" size={24} color="#D476D2" style={{ marginLeft: 5 }} />

            </TouchableOpacity>

          </View>

        </View>
        <View style={{ flexDirection: 'row', marginTop: 15, }}>
          <FontAwesome5 name="store" size={24} color="#D07DCF" style={{ marginLeft: 15, }} />
          <Text style={{marginHorizontal:10,marginTop:6,fontWeight:"600" }}>Xuân Quang</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20, }}>
          <View>
            <AntDesign name="checkcircle" size={24} color="#D07DCF" style={{ marginLeft: 20, marginTop: 50, }} />
          </View>
          <View>
            <Image
              style={{ marginLeft: 20, width: 110, height: 120, borderRadius: 20 }}
              source={require('../assets/tx.png')}
            />
          </View>
          <View style={{ marginLeft: 10, marginBottom: 30, flexDirection: 'column' }}>
            <Text >Áo khoác lót lông </Text>
            <Text >Polo Crop-sọc nhiều...</Text>
            <View style={{ flexDirection: 'row', marginTop: 3 }}>
              <Text style={{ marginTop: 10, color: '#4F4F4F' }}>Màu sắc:</Text>
              <Text style={{ marginTop: 10, color: '#B1B1B1' }}>Đen nâu</Text>
            </View>
            <Text style={{ color: '#B1B1B1' }} >Size:M</Text>
            <Text style={{ color: '#B1B1B1', textDecorationLine: 'line-through' }}>200.000 đ</Text>
            <Text style={{ color: '#3A3A3A' }}>150.000 đ</Text>


          </View>
          <Feather name="x" size={24} color="#D1D1D1" style={{ marginLeft: 40 }} />

        </View>
        <View style={{ width: 30, flexDirection: 'row', width: 80, height: 30, backgroundColor: '#EFEFEF', marginLeft: 180, borderRadius: 20 }}>
        <TouchableOpacity onPress={handleCountMin1}>
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 19, marginLeft: 5 }}>{count1}</Text>
            <TouchableOpacity onPress={handleCountMax1}>
              <Ionicons name="add" size={24} color="#D476D2" style={{ marginLeft: 5 }} />

            </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row', marginTop: 15, }}>
          <FontAwesome5 name="store" size={24} color="#D07DCF" style={{ marginLeft: 15, }} />
          <Text style={{marginHorizontal:10,marginTop:6,fontWeight:"600" }}>Xuân Quang</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20, }}>
          <View>
            <AntDesign name="checkcircle" size={24} color="#D07DCF" style={{ marginLeft: 20, marginTop: 50, }} />
          </View>
          <View>
            <Image
              style={{ marginLeft: 20, }}
              source={require('../assets/anh2.png')}
            />
          </View>
          <View style={{ marginLeft: 10, marginBottom: 30, flexDirection: 'column' }}>
            <Text >Áo kẻ dài tay-Striped </Text>
            <Text >Polo Crop-sọc nhiều...</Text>
            <View style={{ flexDirection: 'row', marginTop: 3 }}>
              <Text style={{ marginTop: 10, color: '#4F4F4F' }}>Màu sắc:</Text>
              <Text style={{ marginTop: 10, color: '#B1B1B1' }}>Xanh lá</Text>
            </View>
            <Text style={{ color: '#B1B1B1' }} >Size:L</Text>
            <Text style={{ color: '#3A3A3A' }}>220.000 đ</Text>


          </View>
          <Feather name="x" size={24} color="#D1D1D1" style={{ marginLeft: 30 }} />

        </View>
        <View style={{ width: 30, flexDirection: 'row', width: 80, height: 30, backgroundColor: '#EFEFEF', marginLeft: 180, borderRadius: 20 }}>
          <AntDesign name="minus" size={24} color="black" />
          <Text style={{ fontSize: 19, marginLeft: 5 }}>1</Text>
          <Ionicons name="add" size={24} color="#D476D2" style={{ marginLeft: 5 }} />

        </View>













      </ScrollView>
      <Separator />
      <View style={{ flexDirection: 'row', marginTop: 7, flex: 0.1 }}>
        <View>
          <View style={{ flexDirection: 'row',alignItems:'center' }}>
            <Text style={{ marginLeft: 10,fontSize:30,fontWeight:'600' }}>Tổng cộng :</Text>
            <Text style={{ color: '#D476D2',fontSize:25,fontWeight:'700', marginLeft:100 }}>230.XXX đ</Text>
          </View>
          
        </View>



      </View>
      <View style={{ width: 300, height: 50, backgroundColor: '#D476D2', borderRadius: 100, marginLeft: 50, marginTop: 20,alignItems:'center',justifyContent:'center' }}>

        <Button
          title="Thanh toán"
          color='#ffffff'
          onPress={() => navigation.navigate('Thanhtoan')}
        />
      </View>







    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 3,
    width: '100%',
    flex: 0.5
  },
  text: {
    fontSize: 42,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
