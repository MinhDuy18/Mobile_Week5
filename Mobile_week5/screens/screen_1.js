import React, { useState ,useEffect} from "react";

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity

} from "react-native";

function Screen1(route, navigation){
    console.log(route)
    var [image,setImage] = useState();
    
    useEffect(()=>{
        setImage(route.params?.img);
        }  ,[route.params?.img])

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
                <Text style = {styles.price_style1}>1.790.000 đ</Text>
                <Text style = {styles.price_style2}>1.790.000 đ</Text>
            </View>
            <View style = {styles.style4}>
                <Text style = {styles.text_style2}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image style = {styles.img_crile} source={require('../img/Group 1.png')}></Image>
            </View>
          
       
               <TouchableOpacity style = {styles.style5} onPress={()=>{navigation.navigate('Screen2')}}>
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
    export default Screen1;