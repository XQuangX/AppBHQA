import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image, Button, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, MaterialIcons, FontAwesome, Entypo, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
const Separator = () => (
  <View style={styles.separator} />
);
const App = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row', height: 40, marginTop: 15, alignItems:'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Giohang')}>
          <AntDesign name="arrowleft" size={30} color="#d1a7cb" style={{marginLeft:5}} />
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 120, color: '#CF7CCE' }}>Thanh toán</Text>
        <SimpleLineIcons name="earphones-alt" size={20} color="#d1a7cb" style={{ marginLeft: 110 }} />
      </View>


      <ScrollView style={styles.scrollView}>
        <View style={{ height: 10, backgroundColor: '#F0F0F0' }}></View>
        <Text>Phương thức vận chuyển </Text>
        <View>
          <View style={{ backgroundColor: '#F0F0F0', height: 90 }}>
            <View style={{ flexDirection: 'row', marginTop: 10, }}>
              <Ionicons name="ios-checkmark-circle" size={24} color="black" />
              <View>
                <Text style={{ fontSize: 12, marginLeft: 25, color: '#878787' }}>Giao hàng tiết kiệm </Text>
                <Text>0 đ(đơn hàng dự kiến sẽ đến trước 4 ngày kể từ lúc đặt hàng .)</Text>


              </View>

            </View>
          </View>
          <View style={{ height: 10, backgroundColor: '#F0F0F0', }}></View>
          <View>
            <View>
              <Text>Phương thức thanh toán</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
              <Image
                style={{ marginLeft: 20, borderRadius: 20 }}
                source={require('../assets/anh11.png')}
              />
              <Text>Thanh toán khi giao hàng</Text>

            </View>
            <Separator />
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
              <Image
                style={{ marginLeft: 20, borderRadius: 20 }}
                source={require('../assets/anh22.png')}
              />
              <Text>Thẻ tín dụng /ghi nợ</Text>

            </View>
            <Separator />
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
              <Image
                style={{ marginLeft: 20, borderRadius: 20 }}
                source={require('../assets/anh33.png')}
              />
              <Text>PayPal</Text>

            </View>


          </View>
          <View style={{ height: 10, backgroundColor: '#F0F0F0' }}></View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={{ fontSize: 15, marginLeft: 10 }}>Áp dụng phiếu giảm giá</Text>
            <Text style={{ color: '#EE6B4D', marginLeft: 100, fontSize: 15 }}>-101.200 đ</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
          <Separator />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, marginLeft: 10 }}>Ví</Text>
            <Text style={{ color: '#8F8F8F', marginLeft: 235, fontSize: 15 }}>Tổng cộng:0 đ</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
          <Separator />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, marginLeft: 10 }}>Điểm</Text>
            <Text style={{ color: '#8F8F8F', marginLeft: 210, fontSize: 15 }}>Tổng cộng:0 đ</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
          <Separator />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, marginLeft: 10 }}>Thẻ quà tặng</Text>

            <Entypo name="chevron-small-right" size={24} color="black" style={{ marginLeft: 260 }} />
          </View>

        </View>
        <View style={{ height: 10, backgroundColor: '#F0F0F0' }}></View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 5 }}>Giỏ hàng </Text>
          <Text style={{ marginLeft: 230 }}>5 sản phẩm</Text>

        </View>
        <ScrollView horizontal contentContainerStyle={{ width: 670, height: 130, marginTop: 20 }}>
          <View>
            <Image
              style={{ marginLeft: 20, borderRadius: 20, width: 120, height: 120 }}
              source={require('../assets/anh1.png')}
            />

          </View>
          <View style={styles.banner}>
            <Image
              style={{ marginLeft: 20, borderRadius: 20, width: 120, height: 120 }}
              source={require('../assets/anh2.png')}
            />
          </View>
          <View style={styles.banner}>
            <Image
              style={{ marginLeft: 20, borderRadius: 20, width: 120, height: 120 }}
              source={require('../assets/tx.png')}
            />
          </View>
          <View style={styles.banner}>
            <Image
              style={{ marginLeft: 20, borderRadius: 20, width: 120, height: 120 }}
              source={require('../assets/quanbo.png')}
            />
          </View>

        </ScrollView>
        <View style={{ height: 10, backgroundColor: '#F0F0F0' }}></View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{ fontSize: 15, marginLeft: 10 }}>Giá bán lẻ:</Text>
          <Text style={{
            fontSize: 15, marginLeft: 220, textDecorationLine: 'line-through'
          }}>1851.000 đ</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ fontSize: 15, marginLeft: 10 }}>Tạm tính:</Text>
          <Text style={{ fontSize: 15, marginLeft: 225 }}>1.012.000 đ</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ fontSize: 15, marginLeft: 2 }}>  Phí vận chuyển:</Text>
          <Text style={{ fontSize: 15, marginLeft: 195 }}>Miễn phí</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ fontSize: 15, marginLeft: 2 }}>  Đảm bảo vận chuyển:</Text>
          <Text style={{ fontSize: 15, marginLeft: 190 }}>0 đ</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ fontSize: 15, marginLeft: 2 }}>  Chiết khấu:</Text>
          <Text style={{ fontSize: 15, marginLeft: 210, color: '#F86F46' }}>-101.200 đ</Text>
        </View>
        <Text style={{ fontSize: 15, color: '#7F7F7F', marginLeft: 10, }}>(Mã phiếu giảm giá:wvn10)</Text>




      </ScrollView>
      <Separator />
      <View style={{ flexDirection: 'row', marginTop: 7, height: 30 }}>



        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>Tổng cộng :</Text>
          <Text style={{ color: '#D476D2', fontWeight: 'bold', fontSize: 20, marginLeft: 120, color: '#CF7CCE' }}>1.320.000 đ</Text>
        </View>





      </View>
      <View style={{ width: 300, height: 50, backgroundColor: '#CF7CCE', borderRadius: 100, marginLeft: 50, marginTop: 15, alignItems:'center',justifyContent:'center' }}>

        <Button
          title="Thanh toán"
          color='#ffffff'
          onPress={() => navigation.navigate('thanhtoanct')}
        />
      </View>







    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 3,
    height: 485,
  },
  text: {
    fontSize: 42,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#BABABA',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;