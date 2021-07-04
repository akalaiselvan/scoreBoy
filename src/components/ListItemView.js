import React from 'react'
import {View} from 'react-native'
import { List,ListItem,Text} from 'native-base'

const ListItemView=({players})=>{
    return(<View style={{height:'58%'}}>
            <List dataArray={players}
                  keyExtractor={(item,index)=>index.toString()}
                  renderRow={(item)=><ListItem>
                  <Text>{item}</Text>    
                  </ListItem>
                }>
            </List>
            </View>
    )
}

export default ListItemView