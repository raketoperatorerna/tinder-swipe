import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    Pressable,
    Button,
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
    hasActions,
}: CardItemT) => {
    // Custom styling
    const [showDescription, setShowDescription] = useState(false);

    const [imageIndex, setImageIndex] = useState(0);

    const imageStyle = [
        {
            width: DIMENSION_WIDTH,
            height: DIMENSION_HEIGHT,
            margin: 0,
        },
    ];

    return (
        <View style={styles.containerCardItem}>
            {/* IMAGE */}
            <Pressable
                onPress={(e) => {
                    setImageIndex(imageIndex == 0 ? 1 : 0);
                    console.log(e)
                }}
                onLongPress={() => {
                    setShowDescription(!showDescription);
                }}
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
