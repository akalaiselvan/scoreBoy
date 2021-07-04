import React from 'react'
import {Left,Text,Right,Radio} from 'native-base'
import {StyleSheet, View} from 'react-native'
const PlayOptions=({isSelected,text,onPress})=>{
    return <View style={styles.view}>
                <Left>
                    <Text>{text}</Text>
                </Left>
                <Right>
                    <Radio
                        color={"#f0ad4e"}
                        selectedColor={"#5cb85c"}
                        selected={isSelected}
                        onPress={onPress}/>
                </Right>
            </View>
}
const styles=StyleSheet.create({
    view:{
        height:'20%',
        flexDirection:'row',
        marginLeft:'8%',
        marginRight:'10%',
        marginTop:'3%'}
});
export default PlayOptions;