/**
 * Created by jasonmullinax on 7/12/14.
 */
var utility = {
    generateRandomString : function (stringLength) {
        var ranStr = '';
        for (var i; i < stringLength; i++) {
            ranStr += 'a';
        }
        console.log(ranStr);
        return ranStr;
    }
};

module.exports = utility;