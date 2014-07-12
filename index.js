var _ = require('underscore');


function dealObject(obj, keys){

  _.each(keys,function(key){
    delete obj[key];
  });

  for(var key in obj){
    clearkeys(obj[key], keys, false);
  }
}

function dealArray(arr, keys){
  _.each(arr,function(obj){
    clearkeys(obj, keys);
  });
}

function clearkeys(origin, keys, clone){
  var obj = clone === false ? origin : _.clone(origin);

  if(_.isObject(obj)){
    dealObject(obj, keys);
  }

  if(_.isArray(obj)){
    dealArray(obj, keys);
  }
  
  return obj;
}

module.exports = clearkeys;