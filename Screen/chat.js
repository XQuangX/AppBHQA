import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput,TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';

import { Ionicons, EvilIcons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';


export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('Ctproduck')}>
          <AntDesign name="left" size={26} color="#1B7BFF" />
        </TouchableOpacity>
        <View style={{ marginLeft: 20, }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100, }}
            source={require('../assets/phamha.png')}
          />

        </View>
        <View >
          <Text style={{ fontSize: 18, }}>Phạm Thị Thu Hà</Text>
          <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5, }}>
            <View style={{ width: 10, height: 10, backgroundColor: "#D80A10", borderRadius: 5, marginLeft: 5, }}></View>
            <View style={{ width: 10, height: 10, backgroundColor: "#31CD55", borderRadius: 5, marginLeft: 5, }}></View>
            <View style={{ width: 10, height: 10, backgroundColor: "#9120CF", borderRadius: 5, marginLeft: 5, }}></View>
            <StatusBar style="auto" />
          </View>
        </View>
        <View style={{ marginLeft: 140, }}>
          <MaterialIcons name="keyboard-control" size={24} color="black" />
        </View>
      </View>


      <View style={{ flexDirection: 'row', height: 40, width: 390, backgroundColor: "#F6F6F6", borderRadius: 100, marginTop: 15, marginLeft: 10, }}>
        <View style={{ paddingLeft: 10, paddingTop: 10, }}><AntDesign name="search1" size={24} color="black" /></View>
        <Text style={{ fontSize: 18, paddingLeft: 40, paddingTop: 10, }}>Tìm kiếm trong cuộc trò chuyện</Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', paddingTop: 10, }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100, marginTop: 50, }}
            source={require('../assets/phamha.png')}
          />
          <View>
            <View style={{ width: 100, backgroundColor: '#F6F7F8', height: 30, borderRadius: 50, marginTop: 10, }}>
              <Text style={styles.top1}>Alo shop ơi</Text>

            </View>
            <View style={{ width: 300, backgroundColor: '#F6F7F8', height: 60, borderRadius: 50, marginTop: 10, }}>

              <Text style={styles.top2}>Mình muốn mua nhiều áo thì giá cả như
                thế nào nhỉ.
                zep inbox giúp mình nhé.</Text>

            </View>


          </View>




        </View>
        <View style={{ width: 310, marginLeft: 110, backgroundColor: '#1455B0', height: 60, borderRadius: 50, marginTop: 10, }} >
          <Text style={styles.top21}>Shop Ngọc Tâm xin chào chị Trang.Cho em xin số điện thoại được k ạ</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 5, }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100, marginTop: 50, }}
            source={require('../assets/phamha.png')}
          />
          <View>
            <View style={{ width: 100, backgroundColor: '#F6F7F8', height: 30, borderRadius: 50, marginTop: 10, }}>
              <Text style={styles.top1}>0972887889</Text>

            </View>
            <View style={{ width: 320, backgroundColor: '#F6F7F8', height: 60, borderRadius: 50, marginTop: 10, }}>

              <Text style={styles.top2}>Như vậy mình chuyển trước 1.500k rồi sau khi nhận hàng chị chuyển trước được không nhỉ?
                thế nào nhỉ.
              </Text>

            </View>


          </View>




        </View>
        <View style={{ width: 305, marginLeft: 110, backgroundColor: '#1455B0', height: 70, borderRadius: 50, marginTop: 10, }} >
          <Text style={styles.top21} >Dạ vâng chị.Bên em đã nhận được số tiền     là 1.500k ứng trước.Khoảng 1-2  sẽ chuyển hàng tới bên chị nhé</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 5, }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100, marginTop: 20, }}
            source={require('../assets/phamha.png')}
          />
          <View>

            <View style={{ width: 320, backgroundColor: '#F6F7F8', height: 60, borderRadius: 50, marginTop: 10, }}>

              <Text style={styles.top2}>Mình đã nhận được hàng rồi nhé.Đã chuyển nốt 500k rồi .Cảm ơn shop nhiều nhé.                        </Text>

            </View>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 40, height: 30, }}>
        <View ><Ionicons name="ios-add-circle-outline" size={27} color="#5540FF" /></View>

        <View style={{ marginLeft: 20, }}><EvilIcons name="image" size={32} color="#5540FF" /></View>
        <View style={{ marginLeft: 20, }}><FontAwesome name="camera" size={27} color="#5540FF" /></View>
        <View style={{ width: 150, backgroundColor: '#F2F3F4', borderRadius: 100, marginLeft: 20, flexDirection: 'row', }}>
          <TextInput

            placeholder="Aa"
            keyboardType="default"

          />
          <View style={{ marginLeft: 100, }}>
            <FontAwesome5 name="smile" size={27} color="#5540FF" />
          </View>

        </View>
        <View style={{ marginLeft: 20, }}><AntDesign name="like1" size={27} color="#5540FF" /></View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 25, }}>


        <View style={styles.ft} >
          <Ionicons name="home-outline" size={28} color="#B6B6B6" />
          <View><Text style={{ fontSize: 12, marginRight: 15, }}>Home</Text></View>
        </View>

        <View style={styles.ft} >
          <SimpleLineIcons name="notebook" size={28} color="#B6B6B6" />
          <View><Text style={{ fontSize: 12, marginRight: 15, }}>Đơn hàng</Text></View>
        </View>
        <View style={styles.ft} >
          <Ionicons name="chatbubble-outline" size={28} color="#B6B6B6" />
          <View><Text style={{ fontSize: 12, marginRight: 15, }}>Thống kê</Text></View>
        </View>

        <View style={styles.ft} >
          <Ionicons name="chatbubble-outline" size={28} color="#B6B6B6" />
          <View><Text style={{ fontSize: 12, marginRight: 15, }}>Chat</Text></View>
        </View>
        <View style={styles.ft} >
          <EvilIcons name="bell" size={38} color="#B6B6B6" />
          <View><Text style={{ fontSize: 12, marginRight: 15, }}>Thông báo</Text></View>
        </View>
      </View>
    </View >


  );
}

const styles = StyleSheet.create({
  container: {


    backgroundColor: '#fff',


  },
  top:
  {
    marginTop: 30,
    height: 60,
    color: '#EFEAEF',


    flexDirection: 'row',

  },
  top1:
  {

    marginTop: 5,
    marginLeft: 15,
    textAlign: 'center',
    marginVertical: 8,


  },
  top2:
  {

    marginTop: 10,
    marginLeft: 15,
    textAlign: 'center',
    marginVertical: 8,


  },
  ft:
  {
    width: 80,
    height: 50,
    marginTop: 15,


  },

  top21:
  {

    marginTop: 10,
    marginLeft: 15,
    textAlign: 'center',
    marginVertical: 8,

    color: "#EFEAEF"



  },

});
