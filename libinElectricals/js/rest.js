var restservice = angular.module('restservice', [])

.factory('RestService', function ($http) {
    
    var facebook="CAAK1tWnlEB4BAHnbZBMAeHrULWxGdqvkqZBPsVeu5P6hJwdwZCSJGUFWsD8W4QEFi4tcghiIqKhopVZBS0QMXChm9cw3ZA8pFHOCHYcpQYVkyI4FbxwCTxGgs6pWQO0rPRqLoAVoKPbxD7TS4OssPl2wblLANrGudFqaSjRptk1A581jcHPZA5QOKiE36ro5UKCbBC4CPjAwZDZD";
    return {
        getall: function () {
            return $http.get("https://graph.facebook.com/v2.0/me?fields&method=GET&format=json&suppress_http_code=1",{access_token:facebook});
        },
         getphoto: function () {
            return $http.get("https://graph.facebook.com/v2.0/me/picture?redirect=false&method=GET&format=json&suppress_http_code=1&access_token=CAAK1tWnlEB4BAHnbZBMAeHrULWxGdqvkqZBPsVeu5P6hJwdwZCSJGUFWsD8W4QEFi4tcghiIqKhopVZBS0QMXChm9cw3ZA8pFHOCHYcpQYVkyI4FbxwCTxGgs6pWQO0rPRqLoAVoKPbxD7TS4OssPl2wblLANrGudFqaSjRptk1A581jcHPZA5QOKiE36ro5UKCbBC4CPjAwZDZD",{});
         
    }
        
        
    }
});