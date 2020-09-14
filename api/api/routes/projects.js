const express = require("express");
const router = express.Router();

const ProjectControllers = require("../conrollers/projects");

router.get("/", ProjectControllers.projects_get_all);

router.get("/:hostName", ProjectControllers.projects_get_project);

router.get(
  "/:hostName/:pathName",
  ProjectControllers.project_get_performanceDatas
);

router.post("/", ProjectControllers.project_create_project);

router.patch("/:hostName", ProjectControllers.project_add_performanceData);

router.delete("/:hostName", ProjectControllers.project_delete_project);

module.exports = router;
