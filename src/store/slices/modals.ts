import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  visibles: {
    createObject: false,
    editObject: false,
    deleteObject: false,
    createTask: false,
    editTask: false,
    deleteTask: false,
    createEmployee: false,
    editEmployee: false,
    deleteEmployee: false,
    createTool: false,
    editTool: false,
    deleteTool: false,
  },
  params: {
    createObject: '',
    editObject: '',
    deleteObject: '',
    createTask: '',
    editTask: '',
    deleteTask: '',
  },
};
export type PayloadKeys = keyof typeof initialState.visibles;
export type PayloadParam = keyof typeof initialState.params;
interface PayloadType {
  key: PayloadKeys;
  isCloseAllModal?: boolean;
  value?: string;
}
const ModalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, { payload }: { payload: PayloadType }) => {
      if (payload.isCloseAllModal == undefined) payload.isCloseAllModal = true;
      if (payload.isCloseAllModal) {
        for (const key in state.visibles) {
          state.visibles[key as PayloadKeys] = false;
        }
      }
      state.visibles[payload.key] = true;
    },
    closeModal: (state, { payload }: { payload: PayloadType }) => {
      state.visibles[payload.key] = false;
    },
    toggleModal: (state, { payload }: { payload: PayloadType }) => {
      state.visibles[payload.key] = !state.visibles[payload.key];
    },
    closeAllModal: state => {
      for (const key in state.visibles) {
        state.visibles[key as PayloadKeys] = false;
      }
    },
    setModalParam: (state, { payload }: { payload: PayloadType }) => {
      if (!payload.value) return;
      state.params[payload.key as PayloadParam] = payload.value;
    },
    removeModalParam: (state, { payload }: { payload: PayloadType }) => {
      state.params[payload.key as PayloadParam] = '';
    },
  },
});
export default ModalsSlice.reducer;
export const {
  openModal,
  closeModal,
  toggleModal,
  setModalParam,
  removeModalParam,
} = ModalsSlice.actions;
