/*
**React app to implement a algorithm to solve a sudoku board, you can input the values one by one or try one of the
sample boards.
**For more information regarding the inner workings of this app, please see sudokusolver.js.
author: Luiz Fernando Bianchi dos Santos
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SudokuSolver from './sudokusolver.js';

class Square extends React.Component {
    constructor(props) {
        super(props);
    };

     render() {
        return (
            <button className="square"
                    onClick={() => this.props.onClick()}
            >
                {(this.props.value > 0 ? this.props.value : "")}
            </button>
        );
    };
};

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            solvable: true,
            solved: false
        };

        this.solveBoard = this.solveBoard.bind(this);
    };

    renderSquare(i, j) {
        return (
            <Square value={this.state.board[i][j]}
                    onClick={() => this.fillSquare(i, j)}
            />
        );
    };

    fillSquare(i, j) {
        var board = this.state.board.slice();
        var number;
        var userInput = prompt("Enter a number.");

        try {
            number = parseInt(userInput);
            if(number > 9 || number < 1) {
                alert("Please enter an integer from 1 to 9.");
            } else {
                board[i][j] = number;
                this.setState({board: board});
            };
        } catch {
            alert("Please enter an integer from 1 to 9.");
        };
    };

    solveBoard() {
        //Solves the array using the .solve() method of the class SudokuBoard.
        let targetBoard = [...this.state.board];
        let solver = new SudokuSolver(targetBoard);
        let result = solver.solve();
        if (result === "Unsolvable.") {
            this.setState({solvable: false});
        } else {
            this.setState({
                board: result,
                solved: true
            });
        };
    };

    fillSample() {
        //Fills in a sample game to test the app.
        let board = [
            [0, 2, 0, 0, 0, 4, 3, 0, 0],
            [9, 0, 0, 0, 2, 0, 0, 0, 8],
            [0, 0, 0, 6, 0, 9, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 7, 2, 5, 0, 3, 6, 8, 0],
            [6, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 8, 0, 2, 0, 5, 0, 0, 0],
            [1, 0, 0, 0, 9, 0, 0, 0, 3],
            [0, 0, 9, 8, 0, 0, 0, 6, 0]
        ];
        let useBoard = [...board];
        this.setState({board: useBoard});
    };

    restart() {
        //Resets the state of the board to the starting values.
        this.setState({
            board: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            solvable: true,
            solved: false
        });
    };

    render() {

        let status = 'Please enter the starting numbers.';
        let button1;
        let button2;

        if(this.state.solved) {
            status = "Solved!";
            button1 = <button onClick={() => this.restart()}>Try again?</button>
        } else {
            button2 = <button onClick={() => this.fillSample()}>Try sample sudoku</button>;
            button1 = <button onClick={() => this.solveBoard()}>Solve it!</button>;
        }
        if(this.state.solvable) {
            //9x9 sudoku board, each square is a button that updates a field of the matrix.
            return (
            <div>
                <div className="status">{status}</div>

                <div className="board-row">
                    {this.renderSquare(0, 0)}
                    {this.renderSquare(0, 1)}
                    {this.renderSquare(0, 2)}
                    {this.renderSquare(0, 3)}
                    {this.renderSquare(0, 4)}
                    {this.renderSquare(0, 5)}
                    {this.renderSquare(0, 6)}
                    {this.renderSquare(0, 7)}
                    {this.renderSquare(0, 8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(1, 0)}
                    {this.renderSquare(1, 1)}
                    {this.renderSquare(1, 2)}
                    {this.renderSquare(1, 3)}
                    {this.renderSquare(1, 4)}
                    {this.renderSquare(1, 5)}
                    {this.renderSquare(1, 6)}
                    {this.renderSquare(1, 7)}
                    {this.renderSquare(1, 8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(2, 0)}
                    {this.renderSquare(2, 1)}
                    {this.renderSquare(2, 2)}
                    {this.renderSquare(2, 3)}
                    {this.renderSquare(2, 4)}
                    {this.renderSquare(2, 5)}
                    {this.renderSquare(2, 6)}
                    {this.renderSquare(2, 7)}
                    {this.renderSquare(2, 8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3, 0)}
                    {this.renderSquare(3, 1)}
                    {this.renderSquare(3, 2)}
                    {this.renderSquare(3, 3)}
                    {this.renderSquare(3, 4)}
                    {this.renderSquare(3, 5)}
                    {this.renderSquare(3, 6)}
                    {this.renderSquare(3, 7)}
                    {this.renderSquare(3, 8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4, 0)}
                    {this.renderSquare(4, 1)}
                    {this.renderSquare(4, 2)}
                    {this.renderSquare(4, 3)}
                    {this.renderSquare(4, 4)}
                    {this.renderSquare(4, 5)}
                    {this.renderSquare(4, 6)}
                    {this.renderSquare(4, 7)}
                    {this.renderSquare(4, 8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(5, 0)}
                    {this.renderSquare(5, 1)}
                    {this.renderSquare(5, 2)}
                    {this.renderSquare(5, 3)}
                    {this.renderSquare(5, 4)}
                    {this.renderSquare(5, 5)}
                    {this.renderSquare(5, 6)}
                    {this.renderSquare(5, 7)}
                    {this.renderSquare(5, 8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6, 0)}
                    {this.renderSquare(6, 1)}
                    {this.renderSquare(6, 2)}
                    {this.renderSquare(6, 3)}
                    {this.renderSquare(6, 4)}
                    {this.renderSquare(6, 5)}
                    {this.renderSquare(6, 6)}
                    {this.renderSquare(6, 7)}
                    {this.renderSquare(6, 8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7, 0)}
                    {this.renderSquare(7, 1)}
                    {this.renderSquare(7, 2)}
                    {this.renderSquare(7, 3)}
                    {this.renderSquare(7, 4)}
                    {this.renderSquare(7, 5)}
                    {this.renderSquare(7, 6)}
                    {this.renderSquare(7, 7)}
                    {this.renderSquare(7, 8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8, 0)}
                    {this.renderSquare(8, 1)}
                    {this.renderSquare(8, 2)}
                    {this.renderSquare(8, 3)}
                    {this.renderSquare(8, 4)}
                    {this.renderSquare(8, 5)}
                    {this.renderSquare(8, 6)}
                    {this.renderSquare(8, 7)}
                    {this.renderSquare(8, 8)}
                </div>
                <div className="button-1">{button1}</div>
                <div className="button-2">{button2}</div>
            </div>
            );
        } else {
            return (
            <div>
                <div>The board you entered was not solvable</div>
                <button onClick={() => this.restart()}>Try again?</button>
            </div>
            );
        };
    }
}

// ========================================

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);
