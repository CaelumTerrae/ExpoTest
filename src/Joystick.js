import {Animated, Dimensions, View, TouchableHighlight, TouchableOpacity,PanResponder,TouchableWithoutFeedback, Text} from 'react-native';
import {useState, useRef, StyleSheet, React} from 'react'

const {height, width} = Dimensions.get('window');

const Joystick = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove:
                Animated.event([
                    null,
                    { dx: pan.x, dy: pan.y}
                  ],{}),
          onPanResponderGrant: () => {
            Animated.timing(color, {toValue: 1, duration: 100}).start();
          },
          onPanResponderRelease: () => {
            Animated.timing(color, {toValue: 0, duration: 100}).start();
            Animated.spring(pan, { toValue: { x: 0, y: 0 }}).start();
          }
        })
      ).current;
    const color = useRef(new Animated.Value(0)).current;

    const interpolatedColor = color.interpolate({
        useNativeDriver: false,
        inputRange: [0,1],
        outputRange: ['#rgb(75, 127, 82)', 'rgb(125,209,129)']
    })

    const pressIn = () => {
        Animated.timing(color,{toValue: 1,duration: 100, useNativeDriver: false}).start()
    }

    console.log(interpolatedColor)
    
    return (
        // <TouchableWithoutFeedback 
        //     onPressIn={pressIn}
        // >
        <View>
            <Animated.View
                style = {{
                    transform: [{translateX: pan.x}, {translateY: pan.y}],
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * 0.5,
                    height: Dimensions.get('window').width * 0.5,
                    backgroundColor: interpolatedColor,
                }}
                {...panResponder.panHandlers}
            >
                <View/>
            </Animated.View>
        </View>
    // </TouchableWithoutFeedback>
    )
}
