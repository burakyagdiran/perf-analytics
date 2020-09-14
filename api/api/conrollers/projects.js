const mongoose = require("mongoose");
const Project = require("../models/project");

exports.projects_get_all = (req, res, next) => {
  Project.find()
    .select("hostName performanceDatas _id")
    .exec()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.projects_get_project = (req, res, next) => {
  const hostName = req.params.hostName;
  let pathData = [];
  Project.findOne({ hostName: hostName })
    .select("hostName performanceDatas _id")
    .exec()
    .then((project) => {
      if (project) {
        pathData = project.performanceDatas.filter(
          (v, i, a) => a.findIndex((t) => t.pathName === v.pathName) === i
        );
        res.status(200).json(pathData);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided host name" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.project_get_performanceDatas = (req, res, next) => {
  const hostName = req.params.hostName;
  const pathName = req.params.pathName;
  let performanceDatas = [];
  Project.findOne({ hostName: hostName })
    .select("hostName performanceDatas _id")
    .exec()
    .then((project) => {
      if (project) {
        project.performanceDatas.forEach((item) => {
          const itemDate = new Date(item.createDate);
          const newDate = new Date();
          const diffSeconds = Math.abs(newDate - itemDate);
          const diffMinutes = Math.ceil(diffSeconds / (1000 * 60));
          if (item.pathName === pathName && diffMinutes <= 30) {
            performanceDatas.push(item);
          }
        });
        res.status(200).json(performanceDatas);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided host name" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.project_create_project = (req, res, next) => {
  const project = new Project({
    _id: new mongoose.Types.ObjectId(),
    hostName: req.body.hostName,
    performanceDatas: [],
  });

  project
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Created product successfully",
        project: project,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.project_add_performanceData = (req, res, next) => {
  const hostName = req.params.hostName;
  const newPerformanceData = req.body;
  Project.update(
    { hostName: hostName },
    {
      $push: {
        performanceDatas: {
          ...newPerformanceData,
          _id: new mongoose.Types.ObjectId(),
        },
      },
    }
  )
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.project_delete_project = (req, res, next) => {
  const hostName = req.params.hostName;

  Project.deleteMany({ hostName: hostName })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
