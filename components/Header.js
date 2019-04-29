import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
    <Text style={textStyle}>Albums!</Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContext: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 30
    },
    textStyle: {
        fontSize:20
    }
}

export default Header;
