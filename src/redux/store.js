import { configureStore } from '@reduxjs/toolkit';
import userInfo from './userInfoSlice';
import auth from './authSlice';
import postInfo from './postInfoSlice';
import myList from './myList';

const store = configureStore({
  reducer: {
    postInfo,
    userInfo,
    auth,
    myList,
  },
});

export default store;
