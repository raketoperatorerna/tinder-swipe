import React, { useState } from "react";
import { View, ImageBackground, Dimensions, ScrollView, Vibration } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { Brand, Filters, CardItem, ItemInfo } from "../components";
import styles, { DIMENSION_WIDTH } from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = () => {
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
                    onSwipedTop={(itemIndex) => {
                        
                    }}
                    /*onSwipeEnd={() => {
                        Vibration.vibrate([1000], false);
                    }}*/
                >
                    {DEMO.map((item) => (
                        <Card key={item.id}>
                            <CardItem
                                hasActions
                                images={item.images}
                                name={item.name}
                                description={item.description}
                                matches={item.match}
                                price={item.price}
                                deliveryTime={item.deliveryTime}
                                sizes={item.sizes}
                            />
                        </Card>
                    ))}
                </CardStack>
            </View>
        </ImageBackground>
    );
};

export default Home;
