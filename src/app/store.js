import CouterReducer from '../Feature/Couter/counterSlice';
import userReducer from '../Feature/Auth/useSlice';
const { configureStore } =  require('@reduxjs/toolkit');


const rootReducer = {
    counter: CouterReducer,
    user: userReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;

