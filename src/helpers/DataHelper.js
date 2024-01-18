import {increment} from '../features/counter/counterSlice';

class DataHelper {
  store = undefined;

  setStore = store => {
    this.store = store;
  };

  getStore = () => {
    return this.store;
  };

  incrementValue = () => {
    this.store.dispatch(increment());
  };
}

export default new DataHelper();
