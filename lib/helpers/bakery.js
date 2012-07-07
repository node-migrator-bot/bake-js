var path = require('path'),
    fs = require('fs');
    
exports.getPath = function(opts, preferLocal) {
    var bakeryPath = '';
    
    if (preferLocal) {
        if (fs.existsSync(path.resolve('recipes'))) {
            bakeryPath = process.cwd();
        }
        else if (fs.existsSync(path.resolve('../recipes'))) {
            bakeryPath = path.resolve('../');
        }
    }
    
    return bakeryPath || opts.bakery;
};