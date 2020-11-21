/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {


    /**
     * Check if a couple login/password is correct and retrieve public information about the user.
     * @param req   Express Request instance.   http://expressjs.com/api.html#req.params
     * @param res   Express Response instance.  http://expressjs.com/api.html#res.status
     */
    authentication: function (req, res) {
        // A Debug information
        if (process.env.NODE_ENV == "development") {
            console.log('User trying connect to server : '+req.param('login')+" hash pass : "+req.param('password'));
        }

        __validator.check([
            __validator.rulesUserLogin(req.param('login')),
            __validator.rulesUserPasswordProtected(req.param('password'))
        ], function(errors, keysModelChecked, keysChecked){
            var User = __Dao.getModel('user');

            User.checkAuthentication(keysModelChecked, function(message){
                return res.send(__format.response(message));
            });
        }, res);
    },

    /**
     * User try to create an Account on game
     */
    subscription: function(req, res){
        // A Debug information
        if (process.env.NODE_ENV == "development") {
            console.log('User trying subscribe to server : '+req.param('login')+" | Hash pass : "+req.param('password')+" | Email : "+req.param('email'));
        }

        // Checking information validity.
        __validator.check([
            __validator.rulesUserLogin(req.param('login')),
            __validator.rulesUserPasswordProtected(req.param('password')),
            __validator.rulesUserEmail(req.param('email'))
        ], function(errors, keysModelChecked, keysChecked){
            var User = __Dao.getModel('user');

            // Generate the user from checked keys and nothing else.
            var user = new User(keysModelChecked);

            // Check if the login OR the email already exist.
            User.exists({login: user.login}, function(err, pseudoFound){
                User.exists({email: user.email}, function(err, emailFound){
                    // If we got an err => Don't find couple User/pass
                    if (err) {
                        User.errorHandler(err, traceback(), function(err){
                            res.json(__format.response(err));
                        });

                    }else{
                        // If login already taken, refuse the subscription.
                        if (pseudoFound) {
                            //return res.json(__format.response("__5"));
                        }
                        if(emailFound){
                            //return res.json(__format.response("__16"));
                        }

                        // Hash password.
                        User.hashPassword(user, function(message){
                            // Update the local user with the user that has his password hashed.
                            user = message.getDataByKey('user');

                            // There is no duplicate
                            user.save(function(err, data) {
                                if(err){
                                    User.errorHandler(err, traceback(), function(err){
                                        res.json(__format.response(err));
                                    });
                                }else{
                                    // A Debug information
                                    consoleDev('User was added with success');

                                    // Retrieves personal user data and returns a response.
                                    User.getProtectedInformation(user, function(message){
                                        res.json(__format.response(null, {user: message.getDataByKey('user')}, true));
                                    });
                                }
                            });
                        });
                    }
                });
            });
        }, res);
    },

    getProtectedInfo: function(req, res){
        var User = __Dao.getModel('User');

        __validator.check([
            __validator.rulesUserLogin(req.param('login')),
            __validator.rulesUserEmail(req.param('email'))
        ], function(errors, keysModelChecked, keysChecked){
            User.getProtectedInformation(keysModelChecked, function(message){
                res.send(__format.response(message));
            });
        }, res);
    },


    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to UserController)
     */
    _config: {}


};
