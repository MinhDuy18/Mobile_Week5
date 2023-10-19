import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button, Rate } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useRoute} from "@react-navigation/native";

export default function Screen1({ navigation }) {
    const route = useRoute();
  const selectedColor = route.params?.selectedColor || "Đỏ";
  const [productInfo, setProductInfo] = useState({});

  const info = {
    Đỏ: {
      img: require("../img/vs_red.png"),
      price: "1.790.000đ",
    },
    Xanh: {
      img: require("../img/vs_blue.png"),
      price: "1.590.000đ",
    },
    Đen: {
      img: require("../img/vs_black.png"),
      price: "1.990.000đ",
    },
    Bạc: {
      img: require("../img/vs_silver.png"),
      price: "1.890.000đ",
    },
  };
  useEffect(() => {
    setProductInfo(info[selectedColor]);
  }, [selectedColor]);
  return(
    <View style = {styles.container}>
        <View style = {styles.style1}>
            <Image style = {styles.img_style} source={route.params?.img||require('../img/vs_blue.png')}></Image>
            <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>,
        <View style = {styles.style2}>
            <View style = {styles.style2_sub}>
                <Image style = {styles.img_Star_style} source={require('../img/star.png')}></Image>
                <Image style = {styles.img_Star_style} source={require('../img/star.png')}></Image>
                <Image style = {styles.img_Star_style} source={require('../img/star.png')}></Image>
                <Image style = {styles.img_Star_style} source={require('../img/star.png')}></Image>
                <Image style = {styles.img_Star_style} source={require('../img/star.png')}></Image>
            </View>
            <View style = {styles.style2_sub}>
                <Text style = {styles.text_style1}>(Xem 828 đánh giá)</Text>
            </View>
        </View>
        <View style = {styles.style3}>
            <Text style = {styles.price_style1}>{productInfo.price}</Text>
            <Text style = {styles.price_style2}>{productInfo.price}</Text>
        </View>
        <View style = {styles.style4}>
            <Text style = {styles.text_style2}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image style = {styles.img_crile} source={require('../img/Group 1.png')}></Image>
        </View>
      
   
           <TouchableOpacity style = {styles.style5} onPress={() => {navigation.navigate('Screen2')}}>
                <Text style = {styles.text_style3} >4 MÀU-CHỌN MÀU</Text>
                <Image style = {styles.img_crile} source={require('../img/vector.png')}></Image>
            </TouchableOpacity>
          
            <TouchableOpacity style = {styles.style6}>
                    <Text style = {styles.text_style4}>CHỌN MUA</Text>
            </TouchableOpacity>
       
    </View>
   
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      
    },
    style1:{
       // flex: 1,
        alignItems: "center",
    },
    style2:{
       // flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
      
    },
    style2_sub:{
       // flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    style3:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    style4:{
        
        flexDirection: "row",
       // justifyContent: 'right',
        alignItems: 'center',
    },
    style5_main:{
        flex: 1,
        justifyContent: 'center',   
    },
    style5:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 332,
        height: 34,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10

    },
    style6:{
       marginTop: 50,
       backgroundColor: 'red',
       justifyContent: 'center',
       alignItems: 'center',
       width: 326,
       height: 44,
       borderWidth: 1,
       borderRadius: 10,
    },
    img_style: {
        width: 301,
        height: 361,
    },
    img_Star_style: {
        width: 23,
        height: 25,
    },
    img_crile: {
        width: 11.5,
        height: 14,
        marginRight: -90,

    },
    text_style1:{
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 17.58,
        marginHorizontal: 20
    },
    text_style2:{
        fontFamily: "Roboto",
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 14.06,
        color: '#FA0000',
        marginHorizontal: 10,
        marginLeft: -140,
        marginTop: 10,
        marginBottom: 10,
    },
    text_style3:{
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 17.58,
       
    },
    text_style4:{
        fontFamily: "Roboto",
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 23.44,
        color: '#FFFFFF',
    },  
    price_style1:{
        fontFamily: "Roboto",
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 21.09,
        marginLeft: -40,
        marginTop: 10,
       marginHorizontal: 80,
    },
    price_style2:{
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 17.58,
        textDecorationLine: 'line-through',
        marginTop: 10,  
    },
  
})