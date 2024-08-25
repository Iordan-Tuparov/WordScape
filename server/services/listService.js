const List = require("../models/listModel");

exports.create = (data) => List.create(data);

exports.getAllLists = () => List.find();

// exports.likeCurrentList = async (userId, listId) => {
//   const currentList = await List.findById({ _id: listId });

//   await currentList.likes.push(userId);

//   await currentList.save();

//   return currentList;
// };

exports.getCurrentLikes = async (listId) => {
  const likesLength = await List.findById({ _id: listId });

  return likesLength;
};
