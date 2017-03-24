/**
 * Created by darshitvora on 16/03/17.
 */
import React, { Component } from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux'
import { SideMenu, List, ListItem } from 'react-native-elements'
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
import Home from './Home'
class SideM extends  Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }

    toggleSideMenu () {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render () {
        const list = [{name: 'Home'}, {name: 'Jobs'}, {name: 'Candidates'}]
        const MenuComponent = (
            <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                onPress={() => console.log('Pressed')}
                                key={i}
                                title={l.name}

                            />
                        ))
                    }
                </List>
            </View>
        )

        return (
            <SideMenu
                isOpen={this.state.isOpen}
                menu={MenuComponent}>
                <Home {...this.props} toggleSideMenu={this.toggleSideMenu.bind(this)} />
            </SideMenu>
        )
    }

}
function mapStateToProps(state){
    return {
        searchedMovies: state.searchedMovies
    }
}


export default connect(mapStateToProps)(SideM);