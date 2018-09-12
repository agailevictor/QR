var db = require('../dbconnection');

var Topup = {

    handlegetUserCurrentBalance: function (callback){
        try{
            return db.query('CALL SP_Get_User_Current_Balance', callback);
        } catch (e) {
            console.log("Error in handlegetUserCurrentBalance : " + e );
        }
    },

    handleupdateUserCurrentBalance: function (res,user,callback){
        try{
            return db.query('CALL SP_Update_User_Current_Balance(?,?)', [user.id, user.current_balance], callback);
        } catch (e) {
            console.log("Error in handleupdateUserCurrentBalance : " + e );
        }
    }

};
module.exports = Topup;