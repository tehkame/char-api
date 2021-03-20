const { check, validationResult } = require('express-validator');

const checks = () => [

  check('character','character field must be a single character')
    .isLength({ min: 1, max:1 }),
  
  check('words','no words field has been provided')
    .isLength({ min: 1 })
];

const reporter = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        
        return res.status(400).json({
            errors: errorMessages
        });
    }
    
    next();
}

module.exports = {
    add: [
        checks(),
        reporter
    ]
};