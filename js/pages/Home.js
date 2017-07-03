/**
 * Created by Rabbit on 2017/7/1.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { userToken } from '../actions/UserToken';

let instructions = '这是未修改的文字';

class Home extends Component {
    componentDidMount() {
        console.log('componentDidMount');
        this.props.userToken();
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');

        // 每次值更新的时候，都会走这个方法，所以可以在这个方法里面添加判断，用来更新页面
        const { userToken } = this.props.ShiTuReducer;
        console.log(userToken);



    }

    render() {
        const { userToken } = this.props.ShiTuReducer;
        console.log(userToken);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={()=>{
                    this.props.navigation.navigate('Detail');
                }}>
                    点我跳转页面，在下一个页面会通过redux修改当前页面状态
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Text style={styles.instructions}>
                    这是通过action得到的：{ userToken }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize:18,
        marginTop:10
    },
});

export default connect((state) => {
    const { ShiTuReducer } = state;
    return {
        ShiTuReducer,
    };
},{ userToken})(Home)
