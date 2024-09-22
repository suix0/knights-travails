function knightsTravails(start, finish) {
  let adjacencyList = {};
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let key = `${i},${j}`;
      adjacencyList[key] = [];
      if ((i - 2 >= 0 && i - 2 <= 7) && (j + 1 >= 0 && j + 1 <= 7)) {
        adjacencyList[key].push([i - 2, j + 1]);
      }
      if ((i - 1 >= 0 && i - 1 <= 7) && (j + 2 >= 0 && j + 2 <= 7)) {
        adjacencyList[key].push([i - 1, j + 2]);
      }
      if ((i + 2 >= 0 && i + 2 <= 7) && (j + 1 >= 0 && j + 1 <= 7)) {
        adjacencyList[key].push([i + 2, j + 1]);
      }
      if ((i + 1 >= 0 && i + 1 <= 7) && (j + 2 >= 0 && j + 2 <= 7)) {
        adjacencyList[key].push([i + 1, j + 2]);
      }
      if ((i - 2 >= 0 && i - 2 <= 7) && (j - 1 >= 0 && j - 1 <= 7)) {
        adjacencyList[key].push([i - 2, j - 1]);
      }
      if ((i - 1 >= 0 && i - 1 <= 7) && (j - 2 >= 0 && j - 2 <= 7)) {
        adjacencyList[key].push([i - 1, j - 2]);
      }
      if ((i + 2 >= 0 && i + 2 <= 7) && (j - 1 >= 0 && j - 1 <= 7)) {
        adjacencyList[key].push([i + 2, j - 1]);
      }
      if ((i + 1 >= 0 && i + 1 <= 7) && (j - 2 >= 0 && j - 2 <= 7)) {
        adjacencyList[key].push([i + 1, j - 2]);
      }
    }
  }

  let boardInfo = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      boardInfo[[i, j]] = {
        distance: null,
        predecessor: null
      }
    }
  }

  boardInfo[[start]].distance = 0;

  let queue = [];
  queue.push(String(start));

  while(queue.length > 0) {
    let source = queue.shift();
    for (let i = 0; i < adjacencyList[source].length; i++) {
      let possibleMoves = String(adjacencyList[source][i]);
      if (boardInfo[possibleMoves].distance === null) {
        boardInfo[possibleMoves].distance = boardInfo[source].distance + 1;
        boardInfo[possibleMoves].predecessor = source;
        queue.push(possibleMoves);
      }
    }
  }

  let paths = [String(finish)];
  let count = 0;
  let finishCopy = boardInfo[[finish]];
  while (finishCopy !== String(start)) {
    paths.push(finishCopy.predecessor)
    finishCopy = boardInfo[finishCopy.predecessor];
    count++;
    if (finishCopy.predecessor === null) {
      break
    }
  }
  paths.reverse();
  paths = paths.map((path) => {
    let arr = [];
    path = path.split('');
    arr.push(Number(path[0]));
    arr.push(Number(path[2]));
    return arr
  })
  console.log(`You did it in ${count} moves! Here's your path:`)
  paths.forEach((path) => {
    console.log(path);
  })
}
knightsTravails([3, 3], [0, 0])