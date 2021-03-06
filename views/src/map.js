// 0    -> Empty space
// Other-> Wall types

// Stage 1 map
var map = [
    [1 , 1 , 16, 1 , 1 , 14, 1 , 5 , 5 , 1 , 2 , 12, 12, 2 , 7 , 2 , 12, 12, 12, 2 ],
    [1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 5 , 12, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 12],
    [1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 5 , 12, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 12],
    [1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 5 , 2 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 12],
    [15, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 11],
    [1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 11],
    [1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 5 , 5 , 2 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 11],
    [16, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 5 , 2 , 2 , 2 , 2 , 0 , 0 , 2 , 11, 11, 2 ],
    [1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 5 , 5 , 1 , 14, 1 , 0 , 0 , 1 , 16, 1 , 1 ],
    [1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ],
    [1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ],
    [1 , 1 , 1 , 15, 1 , 0 , 0 , 1 , 1 , 1 , 15, 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ],
    [1 , 6 , 6 , 6 , 3 , 0 , 0 , 3 , 3 , 3 , 3 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 15],
    [6 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 6 , 16, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ],
    [6 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 4 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ],
    [10, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 6 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 17],
    [9 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 6 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ],
    [3 , 10, 9 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 1 , 1 , 1 , 14, 1 , 1 , 1 , 1 , 1 ]
];

var map21 = [
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 18, 18, 18, 18, 18, 18, 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 18, 0 , 0 , 0 , 0 , 22, 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 18, 0 , 0 , 0 , 0 , 18, 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 18, 0 , 0 , 0 , 0 , 23, 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 18, 0 , 0 , 0 , 0 , 18, 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 18, 18, 18, 18, 18, 18, 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
];

var map22= [
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [19, 19, 19, 19, 19, 19, 24, 19, 19, 19, 19, 19, 19, 19, 19, 27, 19, 19, 19, 19],
    [19, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 19],
    [19, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 26],
    [19, 19, 19, 19, 19, 27, 19, 19, 19, 19, 25, 19, 19, 19, 19, 19, 19, 19, 19, 19],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
];

var map23 = [
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 28, 28, 32, 30, 28, 28, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 28, 0 , 0 , 0 , 0 , 29, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 28, 0 , 0 , 0 , 0 , 29, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 28, 0 , 0 , 0 , 0 , 29, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 28, 28, 28, 28, 28, 28, 0 , 28, 28, 28, 28, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 28, 0 , 0 , 0 , 0 , 28, 0 , 0 , 0 , 0 , 28, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 28, 0 , 0 , 0 , 0 , 28, 28, 28, 28, 0 , 28, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 28, 28, 28, 28, 0 , 31, 0 , 0 , 0 , 0 , 28, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 28, 0 , 0 , 0 , 0 , 28, 0 , 28, 28, 28, 28, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 28, 0 , 28, 28, 28, 28, 0 , 28, 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 28, 0 , 0 , 0 , 0 , 0 , 0 , 28, 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 28, 28, 28, 28, 30, 28, 28, 28, 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
];

var map24 = [
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 21, 21, 21, 21, 21, 12, 21, 21, 21, 21, 21, 21, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 21, 0 , 0 , 0 , 0 , 0 , 21, 0 , 0 , 0 , 0 , 21, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 21, 0 , 0 , 0 , 0 , 0 , 21, 0 , 0 , 0 , 0 , 21, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 21, 0 , 0 , 0 , 0 , 0 , 21, 0 , 0 , 0 , 0 , 21, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 21, 0 , 0 , 0 , 0 , 0 , 21, 21, 21, 21, 0 , 21, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 33, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 21, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 21, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 21, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
];

var map3 = [
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 34, 0 , 34, 0 , 34, 0 , 34, 0 , 34, 0 , 0 , 34, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 38, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 41, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 34, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 34, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 34, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 34, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 39, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 37, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 34, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 34, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 35, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 34, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 40, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 36, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 35, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 34, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 34, 34, 34, 34, 43, 34, 34, 42, 34, 34, 34, 34, 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 0 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 0 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 1 , 1 , 0 , 0 , 0 , 1 , 1 , 0 , 1 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 1 ]
];

var map31 = [
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],
    [1 , 1 , 1 , 44, 44, 44, 44, 44, 44, 44, 44, 51, 44, 44, 44, 44, 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 44, 0 , 44, 0 , 44, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 11, 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 44, 0 , 11, 0 , 11, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 11, 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 52, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 11, 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 44, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 44, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 44, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 44, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 44, 44, 0 , 0 , 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 49, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 44, 11, 0 , 0 , 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 50, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 45, 11, 0 , 0 , 46, 1 , 1 , 1 ],
    [1 , 1 , 1 , 44, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 44, 11, 0 , 0 , 44, 1 , 1 , 1 ],
    [1 , 1 , 1 , 44, 44, 44, 53, 53, 44, 47, 54, 44, 44, 44, 44, 44, 44, 1 , 1 , 1 ],
    [1 , 0 , 1 , 1 , 1 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 1 , 1 , 0 , 1 ],
    [1 , 0 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 1 ],
    [1 , 0 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 , 0 , 0 , 1 , 1 , 1 ],
    [1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 1 ],
    [1 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 1 , 0 , 1 ]
];


//Variables for the map
var mapWidth = 0;		// Width of map
var mapHeight = 0;		// Height of map
var mapScale = 8;	    // How many pixels for a map block

//Function for drawing the minimap.
function drawMap() {

    var container = $("map");
    var miniMap = $("minimap");
    var objects = $("objects");

    //Canvas size
    miniMap.width = mapWidth * mapScale;    // Mini-map width
    miniMap.height = mapHeight * mapScale;  // Mini-map height
    objects.width = miniMap.width;          // Objects width
    objects.height = miniMap.height;        // Objects height

    var widthDim = (mapWidth * mapScale) + "px";                                        // Map width in px
    var heightDim = (mapHeight * mapScale) + "px";                                      // Map height in px
    miniMap.style.width = objects.style.width = container.style.width = widthDim;
    miniMap.style.height = objects.style.height = container.style.height = heightDim;

    var ctx = miniMap.getContext("2d");     // Context of the drawing is going to be one of 2 dimensional

    for (var y = 0; y < mapHeight; y++)     // Draw the minimap
    {
        for (var x = 0; x < mapWidth; x++) 
        {
            var wall = map[y][x];
            if (wall > 0) 
            {
                ctx.fillStyle = "black";
                ctx.fillRect(
                    x * mapScale,
                    y * mapScale,
                    mapScale,
                    mapScale
                );
            }
            if (spritePosition[y][x]) {
                ctx.fillStyle = "rgb(100,100,100)";
                ctx.fillRect(
                    x * mapScale + mapScale * 0.25,
                    y * mapScale + mapScale * 0.25,
                    mapScale * 0.5, mapScale * 0.5
                );
            }
        }
    }
}

// Update minimap for player movement and objects
function updateMap(){
    var miniMap = $("minimap");
    var objects = $("objects");

    var objectCtx = objects.getContext("2d");
    objectCtx.clearRect(0, 0, miniMap.width, miniMap.height);

    objectCtx.fillStyle = "black";
    objectCtx.fillRect(
        player.x * mapScale - 2,
        player.y * mapScale - 2,
        4, 4
    );

    //Entity drawing.
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        objectCtx.fillStyle = "black";
        objectCtx.fillRect(
            entity.x * mapScale - 2,
            entity.y * mapScale - 2,
            4, 4
        );
    }
}