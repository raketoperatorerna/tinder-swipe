import React, { useState } from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { Brand, Filters, CardItem, ItemInfo } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = ({navigation}: any) => {
    const [swiper, setSwiper] = useState<CardStack | null>(null);

    return (
        <ImageBackground
            source={require("../assets/images/bg.png")}
            style={styles.bg}
        >
            <View style={styles.containerHome}>
                <View style={styles.top}>
                    <Filters />
                    <Brand />
                </View>

                <CardStack
                    loop
                    verticalSwipe={false}
                    horizontalThreshold={Dimensions.get('window').width / 9}
                    renderNoMoreCards={() => null}
                    ref={(newSwiper): void => setSwiper(newSwiper)}
                >
                    {DEMO.map((item) => (
                        <Card key={item.id}>
                            <CardItem
                                name={item.name}
                                description={item.description}
                                images={item.images}
                                price={item.price}
                                sizes={item.sizes}
                                deliveryTime={item.deliveryTime}
                                navigation={navigation}
                                hasActions
                            />
                        </Card>
                    ))}
                </CardStack>
            </View>
        </ImageBackground>
    );
};

export default Home;
