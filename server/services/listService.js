const List = require("../models/listModel");

exports.create = (data) => List.create(data);

exports.getAllLists = () => List.find().populate("_owner");
