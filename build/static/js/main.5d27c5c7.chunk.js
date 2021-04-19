(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{14:function(e,r,t){},16:function(e,r,t){"use strict";t.r(r);var n=t(5),s=t(4),a=t(2),i=t(3),u=t(8),h=t(7),d=t(1),o=t.n(d),c=t(9),l=t.n(c),S=(t(14),function(){function e(r){Object(a.a)(this,e),this.mem=r}return Object(i.a)(e,[{key:"findNextEmpty",value:function(){for(var e=0;e<this.mem[0].length;e++)for(var r=0;r<this.mem[0].length;r++)if(0==this.mem[e][r])return[e,r]}},{key:"checkNumInRow",value:function(e,r){for(var t=0;t<this.mem[0].length;t++)if(this.mem[r][t]==e)return!0;return!1}},{key:"checkNumInColumn",value:function(e,r){for(var t=0;t<this.mem[0].length;t++)if(this.mem[t][r]==e)return!0;return!1}},{key:"checkNumInSquare",value:function(e,r,t){var n=0,s=0;r>5?n=6:r>2&&(n=3),t>5?s=6:t>2&&(s=3);for(var a=n;a<n+3;a++)for(var i=s;i<s+3;i++)if(this.mem[a][i]==e)return!0;return!1}},{key:"checkForDuplicates",value:function(e){for(var r=0,t=0,n=0,s=0;s<this.mem.length;s++){r=0;for(var a=0;a<this.mem.length;a++)if(this.mem[s][a]===e&&++r>1)return!0}for(var i=0;i<this.mem.length;i++){t=0;for(var u=0;u<this.mem.length;u++)if(this.mem[u][i]===e&&++t>1)return!0}for(var h=0;h<this.mem.length;h+=3)for(var d=0;d<this.mem.length;d+=3){n=0;for(var o=h;o<h+3;o++)for(var c=d;c<d+3;c++)if(this.mem[o][c]===e&&++n>1)return!0}return!1}},{key:"solve",value:function(){for(var e=1;e<10;e++)if(this.checkForDuplicates(e))return"Unsolvable.";var r,t,s;for(this.log=[],this.count=1;this.findNextEmpty();){if(this.count>9){if(!(r=this.log.pop()))return"Unsolvable.";t=r[0],s=r[1],this.mem[t][s]=0,this.count=r[2],this.count++}else t=(r=this.findNextEmpty())[0],s=r[1];for(;this.count<10;){if(!this.checkNumInRow(this.count,t)&&!this.checkNumInColumn(this.count,s)&&!this.checkNumInSquare(this.count,t,s)){this.log.push([t,s,this.count]),this.mem[t][s]=this.count,this.count=1;break}this.count++}}return Object(n.a)(this.mem)}}]),e}()),q=t(0),v=function(e){Object(u.a)(t,e);var r=Object(h.a)(t);function t(e){return Object(a.a)(this,t),r.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return Object(q.jsx)("button",{className:"square",onClick:function(){return e.props.onClick()},children:this.props.value>0?this.props.value:""})}}]),t}(o.a.Component),m=function(e){Object(u.a)(t,e);var r=Object(h.a)(t);function t(e){var n;return Object(a.a)(this,t),(n=r.call(this,e)).state={board:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],solvable:!0,solved:!1},n.solveBoard=n.solveBoard.bind(Object(s.a)(n)),n}return Object(i.a)(t,[{key:"renderSquare",value:function(e,r){var t=this;return Object(q.jsx)(v,{value:this.state.board[e][r],onClick:function(){return t.fillSquare(e,r)}})}},{key:"fillSquare",value:function(e,r){var t,n=this.state.board.slice(),s=prompt("Enter a number.");try{(t=parseInt(s))>9||t<1?alert("Please enter an integer from 1 to 9."):(n[e][r]=t,this.setState({board:n}))}catch(a){alert("Please enter an integer from 1 to 9.")}}},{key:"solveBoard",value:function(){var e=Object(n.a)(this.state.board),r=new S(e).solve();"Unsolvable."===r?this.setState({solvable:!1}):this.setState({board:r,solved:!0})}},{key:"fillSample",value:function(){var e=[].concat([[0,2,0,0,0,4,3,0,0],[9,0,0,0,2,0,0,0,8],[0,0,0,6,0,9,0,5,0],[0,0,0,0,0,0,0,0,1],[0,7,2,5,0,3,6,8,0],[6,0,0,0,0,0,0,0,0],[0,8,0,2,0,5,0,0,0],[1,0,0,0,9,0,0,0,3],[0,0,9,8,0,0,0,6,0]]);this.setState({board:e})}},{key:"restart",value:function(){this.setState({board:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],solvable:!0,solved:!1})}},{key:"render",value:function(){var e,r,t=this,n="Please enter the starting numbers.";return this.state.solved?(n="Solved!",e=Object(q.jsx)("button",{onClick:function(){return t.restart()},children:"Try again?"})):(r=Object(q.jsx)("button",{onClick:function(){return t.fillSample()},children:"Try sample sudoku"}),e=Object(q.jsx)("button",{onClick:function(){return t.solveBoard()},children:"Solve it!"})),this.state.solvable?Object(q.jsxs)("div",{children:[Object(q.jsx)("div",{className:"status",children:n}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(0,0),this.renderSquare(0,1),this.renderSquare(0,2),this.renderSquare(0,3),this.renderSquare(0,4),this.renderSquare(0,5),this.renderSquare(0,6),this.renderSquare(0,7),this.renderSquare(0,8)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(1,0),this.renderSquare(1,1),this.renderSquare(1,2),this.renderSquare(1,3),this.renderSquare(1,4),this.renderSquare(1,5),this.renderSquare(1,6),this.renderSquare(1,7),this.renderSquare(1,8)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(2,0),this.renderSquare(2,1),this.renderSquare(2,2),this.renderSquare(2,3),this.renderSquare(2,4),this.renderSquare(2,5),this.renderSquare(2,6),this.renderSquare(2,7),this.renderSquare(2,8)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(3,0),this.renderSquare(3,1),this.renderSquare(3,2),this.renderSquare(3,3),this.renderSquare(3,4),this.renderSquare(3,5),this.renderSquare(3,6),this.renderSquare(3,7),this.renderSquare(3,8)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(4,0),this.renderSquare(4,1),this.renderSquare(4,2),this.renderSquare(4,3),this.renderSquare(4,4),this.renderSquare(4,5),this.renderSquare(4,6),this.renderSquare(4,7),this.renderSquare(4,8)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(5,0),this.renderSquare(5,1),this.renderSquare(5,2),this.renderSquare(5,3),this.renderSquare(5,4),this.renderSquare(5,5),this.renderSquare(5,6),this.renderSquare(5,7),this.renderSquare(5,8)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(6,0),this.renderSquare(6,1),this.renderSquare(6,2),this.renderSquare(6,3),this.renderSquare(6,4),this.renderSquare(6,5),this.renderSquare(6,6),this.renderSquare(6,7),this.renderSquare(6,8)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(7,0),this.renderSquare(7,1),this.renderSquare(7,2),this.renderSquare(7,3),this.renderSquare(7,4),this.renderSquare(7,5),this.renderSquare(7,6),this.renderSquare(7,7),this.renderSquare(7,8)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(8,0),this.renderSquare(8,1),this.renderSquare(8,2),this.renderSquare(8,3),this.renderSquare(8,4),this.renderSquare(8,5),this.renderSquare(8,6),this.renderSquare(8,7),this.renderSquare(8,8)]}),Object(q.jsx)("div",{className:"button-1",children:e}),Object(q.jsx)("div",{className:"button-2",children:r})]}):Object(q.jsxs)("div",{children:[Object(q.jsx)("div",{children:"The board you entered was not solvable"}),Object(q.jsx)("button",{onClick:function(){return t.restart()},children:"Try again?"})]})}}]),t}(o.a.Component);l.a.render(Object(q.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5d27c5c7.chunk.js.map