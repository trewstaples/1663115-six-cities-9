import request from 'axios';
import { store } from '../store';
import { clearErrorAction } from '../store/user-data/api-action';
import { ErrorType } from '../types/error';
import { HttpCode } from '../const';
import { setError } from '../store/user-data/user-process';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        handleError(response.data.error);
        break;
      case HttpCode.Unathorized:
        handleError(response.data.error);
        break;
      case HttpCode.NotFound:
        handleError(response.data.error);
        break;
    }
  }
};
