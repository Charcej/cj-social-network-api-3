// Requirement for express router
const router = require('express').Router();

// Set routes for users and thoughts
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// Add the prefix `/users` to routes as created
router.use('/users', usersRoutes);

// Add the prefix `/thoughts` to routes as created 
router.use('/thoughts', thoughtsRoutes);

// Export the module for router
module.exports = router;