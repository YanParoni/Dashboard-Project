import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCompanies = createAsyncThunk(
  'companies/getCompanies',
  async () => {
    return fetch(
        'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data'
    ).then((res) => res.json())
  }
)

const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    list: [],
    status: null,
    selected: [],
  },
  reducers:{
    getById:(state,{payload}) =>{
    state.selected = state.list[payload -1]
    },
    edit:(state, {payload}) =>{
    state.list[payload.id -1].email = payload.email
    state.list[payload.id -1].name = payload.name
    },
    deleteUser:(state,{payload}) =>{
      state.list = state.list.filter((item)=>item.id !== payload)
    },
    addUser:(state,payload)=>{
      state.list.push(payload.payload)
    }
  },
  extraReducers: {
    [getCompanies.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getCompanies.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'

    },
    [getCompanies.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})
export const {getById,edit,deleteUser,addUser } = companiesSlice.actions;

export default companiesSlice.reducer