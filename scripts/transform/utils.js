const getTypeClassId = string => {
  if (string.match(/[\.#]/)) {
    var output = {
      class: '',
      id: '',
      type: '',
    };
    var typeRegex = /^([_a-zA-Z0-9-]+)/;
    var typeMatch = string.match(typeRegex);
    if (typeMatch) output.type = typeMatch[0];

    var classAndIdRegex = /([\.#]-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g;
    var cssMatches = string.match(classAndIdRegex);
    cssMatches.forEach(function (match) {
      if (match.charAt(0) == ".") output.class += " " + match.substring(1);
      if (match.charAt(0) == "#") output.id = match.substring(1);
    });
    return output;
  } else {
    return false;
  }
}

const setTypeClassId = item => {

  var parsed = getTypeClassId(item.type);

  if (parsed) {
    if (parsed.type) item.type = parsed.type;
    if (parsed.id) item.id = parsed.id.trim();
    if (parsed.class) item.class = parsed.class.trim();
  }

  return item;
}

module.exports = {
  getTypeClassId,
  setTypeClassId,
}