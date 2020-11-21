exports.createSuperAdmin = createSuperAdmin;

/**
 * Create superadmin
 */
function createSuperAdmin(req, res) {

    // 
    // Check if master user exists
    Model.find({
        email: 'contato@tochegando.com.br'
    }).exec(function (err, data) {

        // 
        // Error
        if (err) return handleError.index(res, err);

        // 
        // Validate
        if (data && data.length) return res.status(200).json({
            exists: true
        });

        // 
        // Register super admin user
        var model = {
            "provider": "local",
            "email": "contato@tochegando.com.br",
            "password": "123456",
            "profile": {
                "firstName": "To",
                "lastName": "Chegando",
                "contact": {
                    "phone": "99999999999",
                    "mobile": "99999999999"
                }
            },
            "role": "superadmin"
        };

        // 
        // Set account
        req.account = model;

        // 
        // Set model
        User.model = model;

        // 
        // Set res
        User.res = res;

        // 
        // Create record
        User.create(req, function (err, data) {

            // 
            // Error
            if (err) return handleError.index(res, err);

            // 
            // Add user to req
            req.user = data.user;

            // 
            // Set account in accounts
            authService.setAccountInAccounts(req);

            // 
            // Return
            return res.status(200).json(data);
        });
    });
}