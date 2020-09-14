const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  hostName: { type: String, required: true },
  performanceDatas: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      pathName: { type: String, required: true },
      createDate: { type: String, required: true },
      ttfb: { type: Number, required: true },
      fcp: { type: Number, required: true },
      domLoad: { type: Number, required: true },
      windowLoad: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Project", projectSchema);
