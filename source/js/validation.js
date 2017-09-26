(function () {
    var me ={};

    me.isEmail = function(email) {
        var re = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
        return re.test(email);
    };
    me.isNumber = function(num) {
        var re = /^\d+$/;
        return re.test(num);
    };
    me.isEmpty = function(str) {
        return Boolean(str);
    };
    ITVDN.validation = me;

}());