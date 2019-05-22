function getName(node) {
  return node['name'];
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  return collection[node["next"]];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
   return node;
}

function addressAt(index, linkedList, collection) {
  let node = nodeAt(index, linkedList, collection);
  return Object.keys(collection).find(key => collection[key] === node);
}

function indexAt(node, collection, linkedList) {
  let n = headNode(linkedList, collection);
  let collectionLength = Object.keys(collection).length;
  let ind;
  if (node === n) {
    return 0;
  } else {
    for(let counter = 1; counter < collectionLength; counter++) {
      n = next(n, collection);
      if (n === node) {
        ind = counter;
        break;
      }
    }
  }
  return ind
}

function insertNodeAt(index, key, linkedList, collection) {
  let newNode = collection[key];
  let n = nodeAt(index-1, linkedList, collection);
  newNode["next"] = n["next"]
  n["next"] = Object.keys(collection).find(key => collection[key] === newNode);
}

function deleteNodeAt(index, linkedList, collection) {
  let node = nodeAt(index, linkedList, collection);

  let prevNode = nodeAt(index -1, linkedList, collection);
  prevNode["next"] = node["next"];
  node["next"] = '';
}
