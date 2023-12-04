import {createSlice} from '@reduxjs/toolkit';
import data from '../../data/stackline_frontend_assessment_data_2021.json'


interface DataJson {
  value : any;
}

const initialState : DataJson = {
  value : data
}

const dataJson = createSlice({
  name:'dataJson',
  initialState,
  reducers:{}
});

export default dataJson.reducer;