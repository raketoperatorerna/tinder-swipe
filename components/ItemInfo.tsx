import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Button,
    FlatList,
    ImageBackground,
    Image,
    ScrollView,
    Pressable
} from "react-native";
import { ButtonGroup } from 'react-native-elements'
import { CardItem } from "../components";
import { ItemT } from "../types";
import styles, { DIMENSION_WIDTH, DIMENSION_HEIGHT } from "../assets/styles";
import DEMO from "../assets/data/demo";

const ItemInfo = ({
    route
}: any) => {
    const {name, description, images, price, sizes, deliveryTime} = route.params
    const imageStyle = [
        {
            width: DIMENSION_WIDTH,
            height: DIMENSION_HEIGHT,
            margin: 0
        },
    ];
    
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <ScrollView style={{margin: 0, padding: 0}}>
            <View style={{ top: 5, width: DIMENSION_WIDTH, position: "absolute", zIndex: 10, flexDirection:"row", paddingLeft: 10, paddingRight: 10, flex: 1 }}>
                {images.map((image: any, index: number) => {
                    return <View style={{ flex: 1, marginHorizontal: 5, borderBottomColor: imageIndex == index ? 'grey' : 'lightgrey', borderBottomWidth: 3 }}/>
                })}
            </View>
            <View>
                <Pressable
                onPress={(e)=>{
                    if (e.nativeEvent.locationX < DIMENSION_WIDTH * 0.5) {
                        console.log("image left")
                        setImageIndex(imageIndex == 0 ? images.length-1 : imageIndex-1)
                    } else {
                        setImageIndex((images.length-1) == imageIndex ? 0 : imageIndex+1)
                        console.log("image right")
                    }
                }}>
                    <Image
                        source={images[imageIndex]}
                        style={imageStyle}
                    />
                </Pressable>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    bottom: 0,
                    backgroundColor: "#f5f5f5",
                    paddingBottom: 50,
                }}
            >
                <Text style={styles.descriptionCardItem}>
                    {description}
                </Text>
                <ButtonGroup
                    buttons={sizes}
                    containerStyle={{ height: 40, width: '80%' }}
                    buttonContainerStyle={{ backgroundColor: '#ebebeb', borderColor: '#ffffff' }}
                    textStyle={{ color: '#404040' }}
                    selectedButtonStyle={{ backgroundColor: '#c5c5c5' }}
                    selectedTextStyle={{ color: 'black' }}
                    onPress={(item) => {
                        setSelectedIndex(item)
                    }}
                    selectedIndex={selectedIndex}
                />
                <Button
                    style={styles.button}
                    title={"Purchase " + price + " Kr"}
                    onPress={() => { }}
                ></Button>
                <Text
                    style={{
                        textAlign: "left",
                        marginHorizontal: 20,
                        marginBottom: 30,
                        paddingTop: 5,
                        color: "#727171",
                        fontSize: 11
                    }}
                >
                    {deliveryTime + " delivery"}
                </Text>
            </View>

        </ScrollView>
    );
};

export default ItemInfo;
