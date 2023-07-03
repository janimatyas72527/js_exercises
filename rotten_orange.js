var array = [] 
var array_size = 8;
var iteration = 1;

function init_array() {
    for (var i = 0; i < array_size; ++i) {
        array[i] = Array(array_size).fill(0);
    }
}

function update_array(x, y, iteration) {
    if (x > 0) {
        if (array[x - 1][y] === 0) {
            array[x - 1][y] = iteration;
        }
    }
    if (x < array_size - 1) {
        if (array[x + 1][y] === 0) {
            array[x + 1][y] = iteration;
        }
    }
    if (y > 0) {
        if (array[x][y - 1] === 0) {
            array[x][y - 1] = iteration;
        }
    }
    if (y < array_size - 1) {
        if (array[x][y + 1] === 0) {
            array[x][y + 1] = iteration;
        }
    }
}

function make_neighbors_rotten(iteration) {
    for (let i = 0; i < array_size; ++i) {
        for(let j = 0; j < array_size; ++j) {
            if (array[i][j] === iteration - 1) {
                update_array(i, j, iteration);
            }
        }
    }
}

function check_array() {
    let rotten_count = 0;
    for (let i = 0; i < array_size; ++i) {
        for(let j = 0; j < array_size; ++j) {
            if (array[i][j] > 0) {
                ++rotten_count;
            }
        }
    }
    return rotten_count === array_size * array_size;
}

function dump_array(required_length) {
    for (let i = 0; i < array_size; ++i) {
        console.log(array[i].map(item => item.toString().padStart(required_length, '0')).join(' '));
    }
}

function make_rotten(x, y) {
    init_array();

    array[x][y] = iteration;
    while (!check_array()) {
        ++iteration;
        make_neighbors_rotten(iteration);
    }
    console.log(iteration);
    dump_array(iteration.toString().length);
}

make_rotten(7, 2);
