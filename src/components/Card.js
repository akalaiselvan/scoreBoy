import React from 'react'
import {Card,CardItem,Body,Text} from 'native-base'
export const TeamCard=({text,onPress})=>{
    return<Card style={{borderRadius:10}}>
            <CardItem button onPress={()=>onPress()} bordered style={{borderRadius:10}}>                  
                <Body>
                    <Text>
                         {text}
                    </Text>
                </Body>
            </CardItem>
            </Card>
}
