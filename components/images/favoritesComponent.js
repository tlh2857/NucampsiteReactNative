import React, {Component} from 'react';
import {Flatlist, View,Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import { FlatList } from 'react-native-gesture-handler';

const mapStateToProps = state => {
    return{
        campsites: state.campsites,
        favorites: state.favorites
    }
}

class Favorites extends Component {

    static: navigationOptions = {
        title: 'My Favorites'
    }

    render(){

        const {Navigate} = this.props.navigation; 

        const renderFavoriteItem = ({item}) => {
            return (
                <ListItem   
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source:{uri:baseUrl + item.image}}}
                    onPress={()=> Navigate('CampsiteInfo', {campsiteId: item.id})}
                    />
            )
        }
        if(this.props.campsites.isLoading){
            return <Loading />
        }
        if(this.props.campsites.errMess){
            return (
                <View>
                    <Text>{this.props.campsites.errMess}</Text>
                </View>
            )
        }
        return(
            <FlatList  
                data={this.props.campsites.campsites.filter(
                    campsite=> this.props.favorites.includes(campsite.id)
                )} 
                renderItem={renderFavoriteItem}
                            keyExtractor={item=>item.id.toString()}
            
            />
        )
    }
}

export default connect(mapStateToProps)(Favorites)