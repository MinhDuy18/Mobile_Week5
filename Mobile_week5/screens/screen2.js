
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable

} from "react-native";

function screen2({ navigation }) {
    const [image, setImage] = useState(require('../img/vs_red.png'))

    const [txtColor, setTxtColor] = useState("đỏ")
    const [txtProvide, setTxtProvide] = useState("Tiki Tradding")
    const [txtPrice, setTxtPrice] = useState("1.790.000 đ")
    return (
        <View style={styles.container}>

            <View style={styles.style1}>
          
            <Image source={image} style={{
                    width: 112,
                    height: 128,
                    marginHorizontal: 15
                }} resizeMode="contain"/>
          
               
                <View  >
                    <Text >Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng</Text>

                    <View style={{ marginTop: 10, flexDirection: "row" }}>
                        <Text >Màu: </Text>  <Text style={styles.text}>{txtColor}</Text>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: "row" }}>
                        <Text >Cung cấp bởi: </Text>  <Text style={styles.text}>{txtProvide}</Text>
                    </View>

                    <Text style={[styles.text1, { marginTop: 10, }]}>{txtPrice}</Text>

                </View>
            </View>

            <View style={styles.style2}>

                <Text style={{ position: "relative", marginRight: 150, marginTop: -40, fontSize: 18 }}>Chọn một màu bên dưới:</Text>
                <Pressable style={{ margin: 5, width: 75, height: 70, backgroundColor: "#C5F1FB", shadowColor: '', marginTop: 10 }}
                    onPress={() => {
                        setImage(require('../img/vs_silver.png')),
                        setTxtColor('silver'),
                        setTxtProvide('Lazada Tradding')
                        setTxtPrice('1.890.000 đ')
                    }} >

                </Pressable>

                <Pressable style={{ margin: 5, width: 75, height: 70, backgroundColor: "#F30D0D" }}
                    onPress={() => {
                        setImage(require('../img/vs_red.png')),
                        setTxtColor('red'),
                        setTxtProvide('Tiki Tradding')
                        txtPrice('1.790.000 đ')
                    }} >

                </Pressable>

                <Pressable style={{ margin: 5, width: 75, height: 70, backgroundColor: "#000" }}
                    onPress={() => {
                        setImage(require('../img/vs_black.png')),
                        setTxtColor('black'),
                        setTxtProvide('Shope Tradding')
                        setTxtPrice('1.990.000 đ')
                    }}>

                </Pressable>

                <Pressable style={{ margin: 5, width: 75, height: 70, backgroundColor: "#234896" }}
                    onPress={() => {
                        setImage(require('../img/vs_blue.png')),
                        setTxtColor('blue'),
                        setTxtProvide('TikTok Tradding')
                        setTxtPrice('1.590.000 đ')
                    }}>

                </Pressable>

                <TouchableOpacity style={styles.bn2} onPress={() => { navigation.navigate('Screen1',{"img":image} ); }}>
                    <Text style={styles.txtBnt2}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 10,

    },
    style1: {

        margin: 10,
        flex: 3,

        alignItems: "flex-start",
        flexDirection: "row"

    },
    style2: {
        // flex: 7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#C4C4C4',
        // width:360, 
        height: 490

    },

    text: {
        color: '#000',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    },
    text1: {
        color: '#000',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    },
    bn2: {
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#CA1536',
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        width: 326,
        height: 44,
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    txtBnt2: {
        color: '#F9F2F2',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    },
});
export default screen2;