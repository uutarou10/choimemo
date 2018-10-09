import { app, db } from '../util/firebase';
import firebase from 'firebase/app';

const ADD_MEMO = 'memo/ADD_MEMO';

const addMemo = (memo) => ({
  type: ADD_MEMO,
  payload: memo
});

export const createMemo = (
  autherId,
  isPublic,
  title,
  body,
  attachments
) => (async (dispatch) => {
  console.log('hoge')
  const docRef = await db.collection('memos').add({
    autherId,
    isPublic,
    title,
    body,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    attachments
  });

  const document = await docRef.get();
  const data = document.data();

  dispatch(addMemo({
    id: document.id,
    autherId: data.autherId,
    isPublic: data.isPublic,
    title: data.title,
    body: data.body,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    attachments: data.attachments
  }));
});

export const getMemosList = () => (async (dispatch) => {
  const querySnapshot = await db.collection('memos').get();
  querySnapshot.forEach(memo => {
    const {
      autherId,
      isPublic,
      title,
      body,
      createdAt,
      updatedAt,
      attachments
    } = memo.date();

    dispatch(addMemo({
      id: memo.id,
      autherId,
      isPublic,
      title,
      body,
      createdAt,
      updatedAt,
      attachments
    }));
  });
});

const defaultState = {
  items: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case ADD_MEMO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}

