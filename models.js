'use strict';

//contrib
var mongoose = require('mongoose');
var winston = require('winston');

//mine
var config = require('./config');
var logger = new winston.Logger(config.logger.winston);

mongoose.set('debug', true);

exports.init = function(cb) {
    mongoose.connect(config.mongodb, {}, function(err) {
        if(err) return cb(err);
        logger.info("connected to mongo");
        cb();
    });
}
exports.disconnect = function(cb) {
    mongoose.disconnect(cb);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

var exposuresSchema = mongoose.Schema({

    logical_id: String, //"b20121008T153648.0"
    type: String, //"bias", "flat", etc..
    //groups: [String], //PROPIDs

    comments: mongoose.Schema.Types.Mixed,
    headers: mongoose.Schema.Types.Mixed,
});
exports.Exposures = mongoose.model('Exposures', exposuresSchema);

