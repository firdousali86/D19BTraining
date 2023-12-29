class PersistanceHelper {
  actualValue = undefined;

  setValue = someValue => {
    this.actualValue = someValue;
  };

  getValue = () => {
    return this.actualValue;
  };
}

export default new PersistanceHelper();
