export class SudokuSolver {

    constructor(board) {
        this.mem = board;
    };

    findNextEmpty() {
        for (let i = 0; i < this.mem[0].length; i++) {
            for (let j = 0; j < this.mem[0].length; j++) {
                if (this.mem[i][j] === 0) {
                    return [i, j];
                }
            }
        }
    };

    checkNumInRow(num, row) {
        for (let j = 0; j < this.mem[0].length; j++) {
            if (this.mem[row][j] === num) {
                return true;
            }
        }
        return false;
    };

    checkNumInColumn(num, column) {
        for (let i = 0; i < this.mem[0].length; i++) {
            if (this.mem[i][column] === num) {
                return true;
            }
        }
        return false;
    };

    checkNumInSquare(num, row, column) {
        let startRow = 0;
        let startCol = 0;
        //In which 3x3 square is the number located?
        if (row > 5) {startRow = 6}
        else if (row > 2) {startRow = 3}

        if (column > 5) {startCol = 6}
        else if (column > 2) {startCol = 3}

        //Iterate over the square.
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (this.mem[i][j] === num) {
                    return true;
                }
            }
        }
        return false;
    };

    checkForDuplicates(num) {
        //If there are two of the same numbers in the same row, column or square the algorithm will be stuck in an
        //infinite loop.
        let countRow = 0;
        let countCol = 0;
        let countSquare = 0;

        //Check the rows.
        for (let i = 0; i < this.mem.length; i++) {
            countRow = 0;
            for (let j = 0; j < this.mem.length; j++) {
                if(this.mem[i][j] === num){
                    countRow++;
                    if (countRow > 1) { return true }
                }
            }
        }

        //Check the columns
        for (let j = 0; j < this.mem.length; j++) {
            countCol = 0;
            for (let i = 0; i < this.mem.length; i++) {
                if (this.mem[i][j] === num) {
                    countCol++;
                    if (countCol > 1) { return true;}
                }
            }
        }

        //Check the 9 squares
        for (let squareI = 0; squareI < this.mem.length; squareI += 3) {
            for (let squareJ = 0; squareJ < this.mem.length; squareJ += 3) {
                countSquare = 0;
                for (let i = squareI; i < squareI + 3; i++) {
                    for (let j = squareJ; j < squareJ + 3; j++) {
                        if (this.mem[i][j] === num) {
                            countSquare++;
                            if(countSquare > 1) {return true}
                        }
                    }
                }
            }
        }

        return false;
    };

    solve() {
        //Check to see if there is no two of the same number in the same row, column and square.
        for (let number = 1; number< 10; number++) {
            if (this.checkForDuplicates(number)) {
                return "Unsolvable.";
            }
        }

        //This will solve the sudoku puzzle using the backtracking algorithm.
        this.log = [];
        this.count = 1;

        let next;
        let row;
        let col;

        //while there are empty cells on the matrix.
        while(this.findNextEmpty()) {
            //if all the numbers have been tested on the next empty cell, there is a problem.
            //if there has been a problem on the previous attempt, push the last try from the log and work it again.
            if (this.count > 9) {
                next = this.log.pop();

                //If the log is empty, then we tried all the possible combinations, the puzzle is unsolvable.
                if (next) {
                    row = next[0];
                    col = next[1];
                    this.mem[row][col] = 0;
                    this.count = next[2];
                    this.count++;

                } else {
                    return "Unsolvable.";
                }

            } else {
                next = this.findNextEmpty();
                row = next[0];
                col = next[1];
            }



            //try until 9 to fit the counter in the empty cell, if it is a correct fit log the number and the cells.
            while (this.count < 10) {
                if (!this.checkNumInRow(this.count, row)){
                    if (!this.checkNumInColumn(this.count, col)) {
                        if (!this.checkNumInSquare(this.count, row, col)) {
                            this.log.push([row, col, this.count]);
                            this.mem[row][col] = this.count;
                            this.count = 1;
                            break;
                        }
                    }
                }
                this.count++;
            }
        }

        return [...this.mem];
    };

}

export {SudokuSolver as default};

//Some sample solvable boards to use with the React app.
/*
let board1 = [
    [0, 0, 3, 0, 5, 8, 0, 0, 9],
    [0, 0, 9, 7, 4, 0, 0, 6, 2],
    [0, 0, 0, 2, 0, 0, 5, 3, 8],
    [4, 0, 2, 0, 0, 0, 0, 1, 3],
    [9, 0, 0, 3, 0, 4, 0, 8, 7],
    [6, 0, 8, 0, 7, 0, 2, 5, 0],
    [3, 0, 0, 0, 0, 5, 0, 2, 0],
    [0, 0, 5, 0, 3, 7, 0, 9, 0],
    [0, 1, 7, 0, 0, 0, 3, 4, 0]
];


let board2 = [
    [0, 5, 1, 3, 6, 2, 7, 0, 0],
    [0, 4, 0, 0, 5, 8, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 2, 5],
    [0, 8, 0, 0, 0, 0, 9, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 5, 0, 0, 0, 0, 8, 0],
    [1, 2, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 2, 8, 0, 0, 6, 0],
    [0, 0, 8, 5, 3, 4, 2, 9, 0]
];


let board3 = [
    [0, 2, 0, 0, 0, 4, 3, 0, 0],
    [9, 0, 0, 0, 2, 0, 0, 0, 8],
    [0, 0, 0, 6, 0, 9, 0, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 7, 2, 5, 0, 3, 6, 8, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 0, 2, 0, 5, 0, 0, 0],
    [1, 0, 0, 0, 9, 0, 0, 0, 3],
    [0, 0, 9, 8, 0, 0, 0, 6, 0]
]

let board4 = [
    [0, 2, 0, 0, 0, 4, 3, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 5, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 0, 5, 0, 0, 6, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 0, 2, 0, 5, 0, 0, 0],
    [0, 0, 0, 0, 9, 0, 0, 0, 3],
    [0, 0, 9, 8, 0, 0, 0, 6, 0]
]
*/

//-------------------------------------------For testing purposes--------------------------------------------------

//let solver0 = new SudokuSolver(board0);
//console.log("Solving 0");
//console.log(solver0.solve());
 /*
solver1 = new SudokuSolver(board1);
solver2 = new SudokuSolver(board2);
solver3 = new SudokuSolver(board3);
solver4 = new SudokuSolver(board4);

console.log("Solving 1");
console.log(solver1.solve());
console.log("Solving 2");
console.log(solver2.solve());
console.log("Solving 3");
console.log(solver3.solve());
console.log("Solving 4");
console.log(solver4.solve());
*/


