const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// Action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buycake(){
    return{
            type:BUY_CAKE,
            info:"first action taken."
        }
}
function buyIcecream(){
    return{
            type:BUY_ICECREAM,
            info:"first action taken."
        }
}

// Reducer
const cakeInitialState = {
    numOfCakes: 10
}
const icecreamInitialState = {
    numOfIcecream: 20
}

const cakeReducer = (state=cakeInitialState,action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }   
}
const iceCreamReducer = (state=icecreamInitialState,action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecream: state.numOfIcecream -1
        }
        default: return state
    }   
}

// Store
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// Store created
const store = createStore(rootReducer, applyMiddleware(logger))
// getState
console.log('Initial State',store.getState())
// subscribe method is used
const unsubscribe = store.subscribe(()=> {})
// dipatch
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

// unsubscribe
unsubscribe()
