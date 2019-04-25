import React from 'react';
import { Text } from 'react-native';

const Header = () => {
    const { textStyle } = styles;

    return (
        <Text style={textStyle}>Once I was a chicken</Text>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    }
}

export default Header;