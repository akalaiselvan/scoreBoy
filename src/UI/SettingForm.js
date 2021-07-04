import React from 'react';
import {Text,View,Input,Item} from 'native-base';

const SettingForm=({title,value,onChangeText})=>{
    return  <View style={{marginBottom:10}}>
                <Item>
                    <Text>{title}   :</Text>
                    <Input value={value} onChangeText={onChangeText} style={{width:'40%'}}/>
                </Item>
            </View>;
}

export default SettingForm;