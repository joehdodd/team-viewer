function strOp(str: string) {
    return str
      .toString()
      .replace(/\s/g, '')
      .toLowerCase();
  }
  
  function objectValues(value: object) {
    return Object.values(value).reduce((string, val) => {
      const test = val !== null && val !== undefined;
      return (
        string +
        (typeof val === 'object' && val !== null
          ? strOp(objectValues(val))
          : test ? strOp(val) : '')
      );
    }, '');
  }
  
  export function filter(val: string, data: Array<any>) {
    return data.filter(el => {
      return !!val.length ? objectValues(el).includes(strOp(val)) : true;
    });
  }