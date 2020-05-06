import {
  addWord,
  allWords,
  allGroups,
  addGroup,
  findOrCreateGroup,
  wordsByGroup,
} from "../models/words.model";

const postGroup = async (req, res) => {
  try {
    const response = await addGroup(req.body);

    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getGroupByName = async (req, res) => {
  console.log(req.query.name);
  try {
    const response = await findOrCreateGroup(req.query.name);
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getGroups = async (req, res) => {
  try {
    const response = await allGroups();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const postWord = async (req, res) => {

  const body = JSON.parse(req.body)

  try {
    let group = await findOrCreateGroup(req.query.groupName);
    //get or craete word object
    const word = await addWord(body);



    // if words already exists throw dupplicate error
    const words = group.words.map(({
      word
    }) => word);

    if (!words.includes(body.word)) {
      await group.words.addToSet(word._id);
      await group.save();
    } else {
      res.send({
        isDuplicate: true,
        words,
      });
      return;
    }
    res.send({
      isDuplicate: false,
      words: words.concat(body.word),
    });
  } catch (error) {
    res.status(400).send(
      JSON.stringify({
        type: "duplicate",
        message: error.message,
      })
    );
  }
};

const getWordsByGroup = async (req, res) => {
  try {
    const response = await wordsByGroup(req.query.groupName);
    res.send(response);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error);
  }
};

const getWords = async (req, res) => {
  try {
    const response = await allWords();
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

module.exports = {
  postWord,
  getWords,
  getWordsByGroup,
  postGroup,
  getGroups,
  getGroupByName,
};