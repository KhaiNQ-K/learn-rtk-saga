import authReducer from 'features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
const rootReducer = {
  auth: authReducer,
  counter: counterReducer,
};
export default rootReducer;
