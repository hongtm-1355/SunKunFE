export const toCamelCase = (obj, alias = {}) => {
  let rtn = obj;
  const aliasKeys = Object.keys(alias);
  const isBlankAlias = aliasKeys.length === 0;
  if (typeof obj === "object") {
    if (obj instanceof Array) {
      rtn = obj.map(toCamelCase);
    } else {
      rtn = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          let newKey = null;
          if (!isBlankAlias && aliasKeys.includes(key)) {
            newKey = alias[key].replace(/(_\w)/g, k => k[1].toUpperCase());
          } else {
            newKey = key.replace(/(_\w)/g, k => k[1].toUpperCase());
          }

          rtn[newKey] = toCamelCase(obj[key]);
        }
      }
    }
  }
  return rtn;
};
