const miniClass = require("../model/miniClassModel");
const fs = require("fs");

module.exports = {
  createData: (req, res) => {
    miniClass
      .create({
        namaMiniClass: req.body.namaMiniClass,
        dateClass: req.body.dateClass,
        targetProgramId: req.body.targetProgramId,
        posterMiniClass: req.file && req.file.path,
        deskripsiMiniClass: req.body.deskripsiMiniClass,
        materi: req.body.materi,
        persiapan: req.body.persiapan,
        biaya: req.body.biaya,
        isShow: req.body.isShow,
        createdBy: req.body.createdBy,
        isActived: req.body.isActived,
      })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json(err));
  },

  getData: (req, res) => {
    miniClass
      .findAll()
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json(err));
  },

  getDataById: (req, res) => {
    miniClass
      .findOne({ where: { ProgramId: req.params.ProgramId } })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteDataById: (req, res) => {
    miniClass
      .findOne({ where: { ProgramId: req.params.ProgramId } })
      .then((result) => {
        fs.unlinkSync(result.posterMiniClass);
        miniClass
          .destroy({
            where: { ProgramId: req.params.ProgramId },
          })
          .then((u) => {
            res.json(u);
          })
          .catch((err) => res.status(400).json(err));
      })
      .catch((err) => res.status(400).json(err));
  },

  updateDataById: (req, res) => {
    if (req.file) {
      miniClass
        .findOne({ where: { ProgramId: req.params.ProgramId } })
        .then((result) => {
          fs.unlinkSync(result.posterMiniClass);
        })
        .catch((err) => res.status(400).json(err));

      var dataRecord = {
        namaMiniClass: req.body.namaMiniClass,
        dateClass: req.body.dateClass,
        targetProgramId: req.body.targetProgramId,
        posterMiniClass: req.file && req.file.path,
        deskripsiMiniClass: req.body.deskripsiMiniClass,
        materi: req.body.materi,
        persiapan: req.body.persiapan,
        biaya: req.body.biaya,
        isShow: req.body.isShow,
        createdBy: req.body.createdBy,
        isActived: req.body.isActived,
      };
    } else {
      var dataRecord = {
        namaMiniClass: req.body.namaMiniClass,
        dateClass: req.body.dateClass,
        targetProgramId: req.body.targetProgramId,
        deskripsiMiniClass: req.body.deskripsiMiniClass,
        materi: req.body.materi,
        persiapan: req.body.persiapan,
        biaya: req.body.biaya,
        isShow: req.body.isShow,
        createdBy: req.body.createdBy,
        isActived: req.body.isActived,
      };
    }
    miniClass
      .update(dataRecord, { where: { ProgramId: req.params.ProgramId } })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err)
        fs.unlink(req.file.path, (err) => {
          if (!req.file.path && err) {
            next(err);
          }
        });
        return res.status(400).json("Failed update data!");
      });
  },
};
