// Requirement for express router
const router = require('express').Router();

// Sets up all possible requirements from thoughts-controller
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

// Directions to get thoughts
router.route('/').get(getAllThoughts);

// Directions to get, put, delete thoughts by ID
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// Directions for posting thoughts
router.route('/:userId').post(createThoughts);

// Directions for posting reactions 
router.route('/:thoughtId/reactions').post(addReaction);

// Directions for deleting reactions
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exports module for router
module.exports = router;