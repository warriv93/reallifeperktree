var should = require("should");
var mongoose = require('mongoose');
var User = require("../dbmodels/user.js");
var db;
var mongodb = require('../services/connectMongoDB');

describe('User', function () {

    before(function (done) {
        //init database
        mongodb.init(res => {
            console.info(res);
        });
        done();
    });

    after(function (done) {
        mongoose.connection.close();
        done();
    });

    beforeEach(function (done) {
        var user = new User({
            username: '12345',
            password: 'testy'
        });

        user.save(function (error) {
            if (error) console.log('error' + error.message);
            else console.log('no error');
            done();
        });
    });

    it('find a user by username', function (done) {
        User.findOne({ username: '12345' }, function (err, user) {
            user.username.should.eql('12345');
            console.log("   username: ", user.username);
            done();
        });
    });

    afterEach(function (done) {
        User.deleteOne({}, function () {
            done();
        });
    });
});