import { createSlice } from '@reduxjs/toolkit';

export interface IUser {
  name: string,
  password: string,
  position: string,
  privilegies: number,
}

const initialState = {} as IUser;

const setUser = () => {
  return {
    name: 'Rodo Lopez',
    password: '1234abcd',
    position: 'Manager',
    privilegies: 1,
  }
}

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoggedUser(state) {
      const { name, password, position, privilegies } = setUser();

      return {
        ...state,
        name: name,
        password: password,
        position: position,
        privilegies: privilegies
      }
    }
  }
});

export const { setLoggedUser } = users.actions;
export default users.reducer;
