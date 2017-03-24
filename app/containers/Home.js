/**
 * Created by darshitvora on 16/03/17.
 */
import React, { Component } from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux'
import {Card, Button, SearchBar} from 'react-native-elements';
const {
    ScrollView,
    View,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet,
    Text,
    Dimensions
} = ReactNative


class Home extends  Component{
    constructor(props){
        super(props);
        this.state = {searching: false }
    }

    searchPressed(text) {
        let searchText = text;
        this.setState({searching: true})
        this.props.fetchMovies({actor: searchText}).then(() => {
            this.setState({searching: false})
        });
    }
    movies() {
        return Object.keys(this.props.searchedMovies).map(key => this.props.searchedMovies[key])
    }
    render() {
        return <View style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar
                    noIcon
                    round
                    onChangeText={this.searchPressed.bind(this)}
                    placeholder='Type actor name here...' />
               {/* <TouchableHighlight onPress = {() => this.searchPressed()} style={styles.searchButton}>
             <Text>Fetch Movies</Text>
             </TouchableHighlight>*/}
            </View>
            <ScrollView style={styles.scrollContainer}>
                {!this.state.searching && this.movies().map((movie) => {
                    return <View key={movie.show_id} style={styles.scrollInContainer}>


                        <Card
                            title={movie.show_title}
                            image= {{ uri: movie.poster }}>
                            <Text style={{marginBottom: 10}}>
                                {movie.summary}
                            </Text>
                            <Button

                                backgroundColor='#03A9F4'

                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='VIEW NOW' />
                        </Card>




                    </View>
                })}
                {this.state.searching ? <Text>Searching...</Text> :  null}
            </ScrollView>
        </View>
    }

}
function mapStateToProps(state){
    return {
        searchedMovies: state.searchedMovies
    }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,

    },
    searchContainer: {
        height: 40,

        padding: 5,

    },
    scrollContainer: {
        flex: 0.8,
        marginTop: 40,

    },
    resultImage: {
        width: width,
        resizeMode: 'contain',
        height: 150,


    },
    resultText: {
        color: '#fff',
        backgroundColor: '#000',
        height: 20
    }

});
export default connect(mapStateToProps)(Home);