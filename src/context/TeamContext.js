import createContext from "./createContext";

const reducer=(state,actions)=>{
    switch(actions.type){
        case 'add_Team':
            const team={name:actions.payload.teamName,players:actions.payload.team}
            return {...state,teams:[...state.teams,team]};
        default :
            return state;
    }
}

const saveTeam=dispatch=>({teamName,team})=>{
    dispatch({type:'add_Team',payload:{teamName,team}});
}

export const {Context,Provider}=createContext(reducer,{saveTeam},{
                                                          teams:[{name:'IND',
                                                                  players:['AA','BB']},
                                                                  {name:'SL',
                                                                  players:['AA','BB']}],
                                                          defaultTeamSize:11          
                                                        })