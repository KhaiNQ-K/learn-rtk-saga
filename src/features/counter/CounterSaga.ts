import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { increment } from './counterSlice';

export function* logAction(action: PayloadAction) {
  console.log('log action', action);
}

export function* counterSaga() {
  console.log('Counter saga');
  yield takeEvery(increment().type, logAction);
}
