import { GET_ONE_DATA,GET_ONEHEAD_DATA} from './actionTypes'
const defaultState = {
    onelist: [],
    oneheaddata:[],
    index:0
}

export default (state=defaultState, action) => {
    if (action.type === GET_ONE_DATA) {
      // console.log(state.onelist.length);
      // var a =[...state.onelist,action.onelist.data]
      // var newonelist
      // for(var i = 0;i<state.onelist.length;i++){
      //   console.log(state.onelist[i].id)
      //   if(action.onelist.data.id==state.onelist[i].id){
      //     newonelist=[...state.onelist]
      //   }else{
      //     newonelist= [...state.onelist,action.onelist.data]
      //   }
      // }

      return {
        ...state,
        onelist:  [...state.onelist,action.onelist.data],
        index:action.index?action.index:0

      }
    }
    if(action.type === GET_ONEHEAD_DATA) {
      return {
        ...state,
        oneheaddata:[...state.oneheaddata,...action.onehead.data]
      }
    }

  
    return state
  }