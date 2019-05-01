import React from 'react';
import { View, Text } from 'react-native';
import console = require('console');

export default class AlbumList extends React.Component {
    state = { albums: [] }

    componentWillMount() {
            fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ album: response.data }))
            // .then((response) => response.json())
            // .then(data => this.setState({ albums: data }))
    }

    render() {
        console.log(this.state)
        
    return (
        <View>
            <Text>Album Listy fun times</Text>
        </View>
        )  
    }
}