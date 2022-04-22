// Requirement for express router
const router = require('express').Router();

// Sets up any possible requirements from users-controller file
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/users-controller');

// Directions for get and post for users
router.route('/').get(getAllUsers).post(createUsers);

// Directions for get, put, delete users by ID
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// Directions for post, delete friends 
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

// Exports module for router
module.exports = router; 