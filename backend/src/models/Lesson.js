const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: Number,
      default: 10,
    },
    pages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }],
    estimatedDurationOfCompletionInMinutes: {
      type: Number,
      default: 15
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxLength: [400, 'Description cannot exceed 400 characters'] // Array format for custom error message
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model('Lesson', lessonSchema);
