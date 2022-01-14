import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    Pressable,
    Button,
    Dimensions,
    Vibration
} from "react-native";
import { CardItemT } from "../types";
import styles, { DIMENSION_WIDTH, DIMENSION_HEIGHT } from "../assets/styles";

const CardItem = ({
    name,
    description,
    images,
    price,
    sizes,
    deliveryTime,
    height,
    width,
    hasActions,
    navigation
}: any) => {
    // Custom styling
    const [showDescription, setShowDescription] = useState(false);
    const [heightOfView, setHeightOfView] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    const imageStyle = [
        {
            flex: 1,
            width: "100%",
            height: "100%",
            margin: 0,
        },
    ];

    return (
        <View style={[{height: height??DIMENSION_HEIGHT-100, width: width??DIMENSION_WIDTH}, styles.containerCardItem]}>
            {/* IMAGE */}
            <Pressable
                onLayout={(event) => {
                    var {height} = event.nativeEvent.layout;
                    setHeightOfView(height)
                }}
                onPress={(e) => {
                    console.log("This is press element: ", e.nativeEvent.locationY)
                    if(e.nativeEvent.locationY > heightOfView * 0.4) {
                        console.log("mer info")
                        navigation.push("Item Info", {
                            name,
                            description,
                            images,
                            price,
                            sizes,
                            deliveryTime,
                        })
                    } else if (e.nativeEvent.locationX < DIMENSION_WIDTH * 0.5) {
                        console.log("image left")
                        setImageIndex(imageIndex == 0 ? images.length-1 : imageIndex-1)
                    } else {
                        setImageIndex((images.length-1) == imageIndex ? 0 : imageIndex+1)
                        console.log("image right")
                    }
                }}
                style={{flex: 1, width: "100%", height: "100%"}}
            >
                <Image source={images[imageIndex]} style={imageStyle} />
            </Pressable>

            {/* DESCRIPTION */}
            {showDescription && description && (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch",
                        bottom: 500,
                        backgroundColor: "rgba(27, 32, 33, 1)",
                        paddingBottom: 50,
                    }}
                >
                    <Text style={styles.descriptionCardItem}>
                        {description}
                    </Text>
                    <Button
                        style={styles.button}
                        title="Purchase"
                        onPress={() => {}}
                    ></Button>
                </View>
            // <ItemInfo
            //     name={name}
            //     price={price}
            //     deliveryTime={deliveryTime}
            //     sizes={sizes}
            //     images={images}
            //     description={description}
            //     id={0}
            //     match={""}
            // />
            )}
        </View>
    );
};

export default CardItem;
