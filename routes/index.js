// This sets up requirement for express router
const router = require('express').Router();

// This imports API routes 
const apiRoutes = require('./api');

// This adds `/api` to API routes
router.use('/api', apiRoutes);

// In case of 404 error
router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
});

// Export API router
module.exports = router;