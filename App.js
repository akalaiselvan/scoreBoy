//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Settings from './src/screens/Settings'
import MatchList from './src/screens/MatchList'
import HomeScreen from './src/screens/HomeScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {navigationRef} from './src/navigationRef'
import MatchSettings from './src/screens/MatchSettings';
import MatchHistory from './src/screens/MatchHistory'
import PlayGround from './src/screens/PlayGround'
import ScoreCard from './src/screens/ScoreCard'
import TeamList from './src/screens/TeamList'
import CreateTeam from './src/screens/CreateTeam'
import PlayersList from './src/screens/PlayersList';
import {Provider as TeamProvider} from './src/context/TeamContext'
import { Provider as MatchProvider} from './src/context/MatchContext';

const Tab=createBottomTabNavigator();
const Matches=createStackNavigator();

const HomeStack=()=>{
	return(
		<Matches.Navigator>
			<Matches.Screen name='Hom' component={HomeScreen}/>
			<Matches.Screen name='TeamList' component={TeamList}/>
			<Matches.Screen name='CreateTeam' component={CreateTeam}/>
			<Matches.Screen name='PlayersList' component={PlayersList}/>
			<Matches.Screen name='MatchSettings' component={MatchSettings}/>
			<Matches.Screen name='PlayGround' component={PlayGround}/>
		</Matches.Navigator>
	)
}

const App=()=>{
	return(
		<NavigationContainer ref={navigationRef}>
			<Tab.Navigator>
				{/* <Tab.Screen name='Home' 
							component={HomeScreen} 
							options={{
								tabBarLabel:'Home',
								tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={color} size={size}/>,							
								}}/> */}
				<Tab.Screen
							name='HomeStack'
							component={HomeStack}
							options={{
								tabBarLabel:'Home',
								tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={color} size={size}/>,							
								}}
							/>				
				<Tab.Screen name='Matches' 
							component={MatchList}
							options={{
								tabBarLabel:'Matches',
								tabBarIcon:({color,size})=><MaterialCommunityIcons name="cricket" color={color} size={size}/>,							
								}}/>
				<Tab.Screen name='Settings' 
							component={Settings}
							options={{
								tabBarLabel:'Settings',
								tabBarIcon:({color,size})=><MaterialCommunityIcons name="tools" color={color} size={size}/>,							
								}}/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default ()=>{
	return(
		<TeamProvider>
			<MatchProvider>
				<App/>
			</MatchProvider>
		</TeamProvider>
	)
} 
