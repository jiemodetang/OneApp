import { GET_ONE_DATA, GET_ONEHEAD_DATA} from './actionTypes'

export const loadListDataSync = (onelist,index) => {
  return {
    type:  GET_ONE_DATA,
    onelist,
    index
  }
}
export const loadOneHeadDataSync = (onehead)=>{
  return {
    type:GET_ONEHEAD_DATA,
    onehead
  }
}

export const loadOneDataAsync = (dispatch,val,index) => {
  return () => {
    fetch(`/mock/one/201811${val}.json`)
      .then(response => response.json())
      .then(result => {
        dispatch(loadListDataSync(result,index))
      })
  }
}

export const loadOneHeadDataAsync = (dispatch)=>{
  return ()=>{
    fetch('/mock/oneleftlist/oneleftlist201810.json')
      .then(response=>response.json())
      .then(result =>{
        dispatch(loadOneHeadDataSync(result))
      })
  }
}
 