import React from 'react';
import { View, Text } from 'react-native';

export default class AlbumList extends React.Component {
    componentWillMount() {
        console.log('component will mount in AlbumList')
            fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then(data => this.setState({ albums: data }));
    }

    render() {
    return (
        <View>
            <Text>Album Listy fun times</Text>
        </View>
        )  
    }
}