import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style-={viewStyle}>
        <Text style={textStyle}>Once I was a chicken</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#3DCCCC',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;