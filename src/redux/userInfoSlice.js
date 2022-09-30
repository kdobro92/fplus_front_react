import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: null,
  birth: null,
  chgDate: null,
  chgTime: null,
  chgUser: null,
  code: null,
  delYn: null,
  delete: null,
  email: null,
  friendId: null,
  imageDir: null,
  imageName: null,
  imgUrl: null,
  msg: null,
  ok: null,
  password: null,
  place: null,
  regDate: null,
  regUser: null,
  seq: null,
  sex: null,
  userId: null,
  userRole: null,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUpdateUserInfo: (state, action) => {
      const res = action.payload;
      const result = {
        userId: res.userId,
        email: res.email,
        password: res.password,
        friendId: res.friendId,
        image: res.image,
        place: res.place,
      };
      return result;
    },
  },
});

export const { setUpdateUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
