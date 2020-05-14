var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value){
  obj[key] = value
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  obj[key] = value
  return obj;
}

function deleteFromObjectByKey(object, key){
  var newObj =  Object.assign({},object)
  delete newObj[key]
  return newObj;
}
