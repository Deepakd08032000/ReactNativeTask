
import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { SIZES } from '../../constants';



const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

const Carousel = ({ data, duration, imageStyle,renderItem }) => {


    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [dataState, setDataState] = useState(data);
    const ref = useRef(null);

    useInterval(() => {
        goNextSlide();
    }, duration);

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        setCurrentSlideIndex(nextSlideIndex);
        const offset = nextSlideIndex * SIZES.width;
        ref?.current?.scrollToOffset({ offset });
    }

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 50,
    };


    const onViewableItemsChanged = ({ viewableItems, changed }) => {
        if (viewableItems.length > 0) {
            let currentIndex = viewableItems[0].index;
            if (currentIndex % data.length === data.length - 1) {
                setCurrentSlideIndex(currentIndex),
                    setDataState(dataState => [...dataState, ...data]);
            } else {
                // console.log(currentIndex, 'else');
                setCurrentSlideIndex(currentIndex);
            }
        }
    };

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged },
    ]);

    return (
        <FlatList
            data={dataState}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            key={({ _, index }) => index}
            pagingEnabled
            decelerationRate="fast"
            
            bounces={false}
            snapToInterval={SIZES.width}
            ref={ref}
            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            getItemLayout={(data, index) => ({
                length: SIZES.width,
                offset: SIZES.width * index,
                index,
            })}
            windowSize={1}
            initialNumToRender={1}
            maxToRenderPerBatch={1}
            removeClippedSubviews={true}
            style={{ flexGrow: 0 }}
        />

    );
}

Carousel.defaultProps = {
    data: [],
    duration: 2000,
}

export default Carousel;

const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        alignItems: 'center',
    },
    imageBox: {
        width: SIZES.width * .92,
        height: SIZES.height * .2,
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: SIZES.width * .92,
        borderRadius: 8,
        height: SIZES.height * .2,
    },
})


