function getName(node) {
    return node.name;
}

function headNode(head, collection) {
    return collection[head]
}

function next(node, collection) {
    let location = node['next']
    let nextNode = collection[location]
    return nextNode;
}

function nodeAt(index, pointer, collection) {
    let currentNode = collection[pointer],
        count = 0;
    while (count < index) {
        next = currentNode.next
        currentNode = collection[next]
        count++;
    }
    return currentNode
}

function addressAt(index, pointer, collection) {
    if (index === 0) return pointer;

    let node = nodeAt(index - 1, pointer, collection);
    return node.next
}

function indexAt(node, collection, pointer) {
    let currentNode = collection[pointer],
        index = 0;
    while (node != currentNode) {
        next = currentNode.next;
        currentNode = collection[next]
        index++;
    }
    return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)

    let previousNodeIdx = indexAt(previousNode, collection, linkedList)
    let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
    let previousNodeAddress = addressAt(previousNode, linkedList, collection)
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
}


function deleteNodeAt(index, pointer, collection) {
    let previousNode;
    let currentNode = headNode(pointer, collection);
    for (let i = 0; i < index; i++) {
        previousNode = currentNode
        let location = currentNode['next']
        let nextNode = collection[location]
        currentNode = nextNode;
    }
    previousNode.next = currentNode.next
}
