
//contrib
var request = require('supertest')
var assert = require('assert');
var mongoose = require('mongoose');

//mine
var config = require('../config');
var db = require('../models');

var app = require('../server').app;

mongoose.set('debug', true);

before(function(done) {
    db.init(function(err) {
        if(err) done(err);
        //this.timeout(10000);
        done();
    });
});

describe('health', function() {
    it('GET /health should return 200', function(done) {
        request(app)
        .get('/health')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
        .expect(200, done);
    });
});

describe('exposures', function() {
    it('GET /exposures should return requested records', function(done) {
        //this.timeout(10000);
        request(app)
        .get('/exposures?limit=2&skip=100&sort=headers.DATE-OBS')
        .set('Authorization', 'Bearer '+config.test.jwt)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
        .expect(200, {exposures: [
            {
                 "_id": "570bd32a47cca3c078f8bb17",
                 "logical_id": "o20121008T214003.0"
            },
            {
                  "_id": "570bd32b47cca3c078f8bb18",
                  "logical_id": "o20121008T214326.0"
            }
        ], 
        count: 2419}, done)
    });
});

