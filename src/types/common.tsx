import { AxiosResponse, AxiosError } from 'axios';

export type IStates<T> = {
  isPending: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  data?: T[];
};

export type PayloadProps<T> = {
  response?: AxiosResponse;
  error?: AxiosError<Error> | unknown;
  data?: T[];
};

export type DispatchProps<T> = React.Dispatch<{
  type: string;
  payload?: PayloadProps<T>;
}>;

export type actionTypes = {
  PENDING: 'ACTION_TYPES_PENDING';
  SUCCESS: 'ACTION_TYPES_SUCCESS';
  FAILURE: 'ACTION_TYPES_FAILURE';
};
