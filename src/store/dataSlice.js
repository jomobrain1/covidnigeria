import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataList',
  initialState: {
    data: null
  },
  reducers: {
    addData: (state, {payload}) => {
        // console.log({payload})
      state.data = {...payload}
    },
  }
})

export const { addData } = dataSlice.actions

export default dataSlice.reducer

export async function fetchData(dispatch, getState) {
    const response = await fetch('https://covidnigeria.herokuapp.com/api')
    .then((response) => response.json())
    .then((data) => data.data);
    dispatch(addData(response))
  }