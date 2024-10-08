const mongoose = require('mongoose');

const courseExitSurvey = mongoose.Schema({
    CO1: {
        type: Number
    },
    CO2: {
        type: Number
    },
    CO3: {
        type: Number
    },
    CO4: {
        type: Number
    },
    CO5: {
        type: Number
    },
    CO6: {
        type: Number
    },
    appropriatenessOfAssessmentToolsUsed: {
        type: String
    },
    courseCode: {
        type: String
    },
    courseName: {
        type: String
    },
    courseSuggestions: {
        type: String
    },
    dislike: {
        type: String
    },
    hostingTools: {
        type: String
    },
    lectureRating: {
        type: String
    },
    like: {
        type: String
    },
    textBookAvailability: {
        type: String
    },
    year: {
        type: String
    },
    fuzzyResult: {
        type: Number
    }
});

const CourseExitSurvey = mongoose.model("CourseExitSurvey", courseExitSurvey);

module.exports = CourseExitSurvey;