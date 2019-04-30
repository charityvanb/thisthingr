import React from 'react';
import { View, Text } from 'react-native';


export default class AlbumList extends React.Component {
    componentWillMount() {
        console.log('component will mount in AlbumList')
    }
    render() {
    return (
        <View>
            <Text>Albumn Listy fun times</Text>
        </View>
        )  
    }
}