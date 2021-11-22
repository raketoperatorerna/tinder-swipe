import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Pressable,
    Button,
    ScrollView,
} from "react-native";
import Icon from "./Icon";
import { ItemInfo } from "../components";
import { CardItemT } from "../types";
import styles, {
    DISLIKE_ACTIONS,
    FLASH_ACTIONS,
    LIKE_ACTIONS,
    STAR_ACTIONS,
    WHITE,
} from "../assets/styles";
import { TouchableHighlight } from "react-native-gesture-handler";

const CardItem = ({
    description,
    hasActions,
    hasVariant,
    images,
    isOnline,
    matches,
    name,
    price,
    deliveryTime,
    sizes
}: CardItemT) => {
    // Custom styling
    const fullWidth = Dimensions.get("window").width;
    const fullHeight = Dimensions.get("window").height;

    const [showDescription, setShowDescription] = useState(false);

    const [imageIndex, setImageIndex] = useState(0);

    const imageStyle = [
        {
            //borderRadius: 8,
            //width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
            width: hasVariant ? fullWidth : fullWidth,
            //height: hasVariant ? 170 : 350,
            height: hasVariant ? fullHeight : fullHeight,
            //margin: hasVariant ? 0 : 20,
            margin: hasVariant ? 0 : 0,
        },
    ];

    const nameStyle = [
        {
            //paddingTop: hasVariant ? 10 : 15,
            //paddingBottom: hasVariant ? 5 : 7,
            color: "#363636",
            fontSize: hasVariant ? 15 : 30,
            elevation: 5,
            paddingBottom: 100,
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

            {/* MATCHES */}
            {matches && (
                <View style={styles.matchesCardItem}>
                    <Text style={styles.matchesTextCardItem}>
                        <Icon name="heart" color={WHITE} size={13} /> {matches}%
                        Match!
                    </Text>
                </View>
            )}

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
            )}

            {/* STATUS */}
            {!description && (
                <View style={styles.status}>
                    <View style={isOnline ? styles.online : styles.offline} />
                    <Text style={styles.statusText}>
                        {isOnline ? "Online" : "Offline"}
                    </Text>
                </View>
            
                // <ItemInfo
                //     name={name}
                //     price={price}
                //     deliveryTime={deliveryTime}
                //     sizes={sizes}
                //     images={images}
                //     description={description}
                //     id={0}
                //     isOnline={false}
                //     match={""}
                // />
            )}

            {/* ACTIONS */}
            {hasActions && (
                <View style={styles.actionsCardItem}>
                    <TouchableOpacity style={styles.miniButton}>
                        <Icon name="star" color={STAR_ACTIONS} size={14} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Icon name="heart" color={LIKE_ACTIONS} size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Icon name="close" color={DISLIKE_ACTIONS} size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniButton}>
                        <Icon name="flash" color={FLASH_ACTIONS} size={14} />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default CardItem;
