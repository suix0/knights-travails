# Knights Travails

> Shortest path finder for a chess knight on an 8×8 board using BFS and predecessor tracking. The Odin Project CS section.

---

## About

This project solves the **Knight's Travails** problem as part of the Computer Science section of [The Odin Project's Full Stack JavaScript curriculum](https://www.theodinproject.com/lessons/javascript-knights-travails).

Given a start and end position on a standard 8×8 chessboard, the algorithm finds the **minimum number of moves** a chess knight needs to travel between them, and prints the exact path taken.

---

## Concepts Demonstrated

- Modeling a chessboard as a **graph** using an adjacency list
- **BFS (Breadth-First Search)** to guarantee the shortest path
- **Predecessor tracking** to reconstruct the full path after traversal
- Translating a 2D grid problem into a graph traversal problem

---

## How It Works

### Step 1 — Build the graph

Every cell on the 8×8 board is a node. For each cell, all valid knight moves (up to 8) are computed and stored as edges in an adjacency list, respecting board boundaries.

### Step 2 — BFS from start

Starting from the source cell, BFS explores all reachable cells level by level. For each unvisited cell, it records:
- Its **distance** from the start (move count)
- Its **predecessor** (the cell it was reached from)

Because BFS explores by distance, the first time it reaches the target cell is guaranteed to be via the shortest path.

### Step 3 — Reconstruct the path

Walking backwards from the target cell using the predecessor chain rebuilds the full sequence of moves. The path is then reversed and printed.

---

## Usage

```bash
# Clone the repo
git clone https://github.com/nethangabrielb/knights-travails.git
cd knights-travails

# Run directly with Node
node knightsTravails.js
```

To try different start/end positions, edit the call at the bottom of `knightsTravails.js`:

```js
knightsTravails([0, 0], [7, 7]);
// knightsTravails([3, 3], [4, 3]);
// knightsTravails([0, 0], [1, 2]);
```

### Sample Output

```
knightsTravails([3, 6], [7, 7])

You did it in 4 moves! Here's your path:
[ 3, 6 ]
[ 4, 4 ]
[ 6, 5 ]
[ 7, 7 ]
```

---

## Files

| File | Description |
|------|-------------|
| `knightsTravails.js` | Full implementation — graph construction, BFS, path reconstruction |

---

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) — for the curriculum and project brief
