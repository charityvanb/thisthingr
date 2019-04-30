import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


export default class AlbumList extends React.Component {
    componentWillMount() {
        console.log('component will mount in AlbumList')
            axios.get ('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responseData) => this.setState({ albums: responseData }))
    }
    render() {
    return (
        <View>
            <Text>Albumn Listy fun times</Text>
        </View>
        )  
    }
}