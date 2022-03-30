export default function cloneObjWithDefaultVal(
  obj: object,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defVal: any
): object {
  let cloneObj;
  if (Array.isArray(obj)) {
    cloneObj = [];
    for (const v of obj) {
      if (typeof v !== 'object') {
        cloneObj.push(defVal);
      } else {
        cloneObj.push(cloneObjWithDefaultVal(v, defVal));
      }
    }
    return cloneObj;
  }
  cloneObj = {} as Record<string, unknown>;
  for (const key in obj) {
    if (typeof obj[key as keyof typeof obj] !== 'object') {
      cloneObj[key as keyof typeof cloneObj] = defVal;
    } else {
      cloneObj[key] = cloneObjWithDefaultVal(
        obj[key as keyof typeof obj],
        defVal
      );
    }
  }
  return cloneObj;
}
