/**
 * Created by jasonmullinax on 7/12/14.
 */
var should = require("should");

describe("User", function(){

    describe("defaults", function() {

        var user = {};

        before(function() {
            user = new User({email : "jason@test.com"});
        });

        it("email is jason@test.com");
        it("has an authentication token");
        it("has a pending status");
        it("has a created date");
        it("has a signIncount of 0");
        it("has lastLogin");
        it("has currentLogin");
        it("has a sessionToken");
        it("has a reminderToken");
        it("has a reminder send date");

    });

});