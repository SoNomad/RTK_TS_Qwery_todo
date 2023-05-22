import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<IUser[]>('https://sonplaceholder.typicode.com/users');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue('error fetching users');
  }
});
