// Sets up requirements for mongoose and moment
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Schema for REACTIONS
const ReactionsSchema = new Schema(
    {
    // This is to set custom ID 
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 300
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // This is for moment to set up time stamp
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
    },
    {
    toJSON: {
        getters: true
    } 
    }
);

// Schema for THOUGHTS
const ThoughtsSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 300
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // This is for moment to set up time stamp
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    // Validation
    reactions: [ReactionsSchema]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    // prevents virtuals from creating duplicate of _id as 'id'
    id: false
    }
)

// get total count of reactions on retrieval
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// This is for creating the model for THOUGHTS using associated schema 
const Thoughts = model('Thoughts', ThoughtsSchema);

// Exporting the module for thoughts
module.exports = Thoughts;