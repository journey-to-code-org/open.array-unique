export function uniqueArray(array, key) {
  if (!Array.isArray(array)) throw new TypeError("Expected array to be an array");
  let selector;
  if (key === undefined) selector = value => value;
  else if (typeof key === "function") selector = key;
  else if (typeof key === "string") selector = value => value?.[key];
  else throw new TypeError("Expected key to be a string or function");
  const seen=new Set(), result=[];
  for(const item of array){ const k=selector(item); if(!seen.has(k)){seen.add(k);result.push(item);} }
  return result;
}
