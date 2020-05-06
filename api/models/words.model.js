import {
  Word,
  Group
} from "../dbConnectors";

export const findOrCreateGroup = async (name) => {
  let group = await Group.findOne({
    name,
  }).populate('words');

  if (!group || group.length === 0) {

    group = await addGroup({
      name
    })
  }

  return group;
};

export const allGroups = async () => {
  const groups = await Group.find({});

  return groups;
};

export const addGroup = async (input) => {
  let newGroup = new Group({
    ...input,
  });

  newGroup.id = newGroup._id;
  return await newGroup.save();
};

export const allWords = async () => {
  const words = await Word.find({}).select("word");

  return words.map(({
    word
  }) => word);
};

export const wordsByGroup = async (name) => {
  const group = await findOrCreateGroup(name)

  return group.words.map(({
    word
  }) => word);
};

export const addWord = async ({
  word
}) => {

  let newWord = await Word.findOne({
    word
  })

  if (newWord) return newWord

  newWord = new Word({
    word,
  });

  newWord.id = newWord._id;
  return await newWord.save();
};