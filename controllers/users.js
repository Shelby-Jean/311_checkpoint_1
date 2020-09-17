const users = require('../data/index');
const sampleUser = require('../data/sampleUser');


const listUsers = (req, res) => {
  return res.json(users);
}

const showUser = (req, res) => {
  let find = users.find(user => user.id === parseInt(req.params.id));
  return res.json(find);
}

const createUser = (req, res) => {
  let counter = users.length + 1;
  sampleUser.id = counter;
  users.push(sampleUser);
  return res.json(users);
}

const updateUser = (req, res) => {
  let find = users.find(user => user.id === parseInt(req.params.id));
  if(find){
    users.forEach(user => {
      if(user._id === parseInt(req.params.userId)){
        user = sampleUser;
        return res.json(user);
      }
    })
  }
}

const deleteUser = (req, res) => {
  let find = users.find(user => user.id === parseInt(req.params.id));
  if(find){
    users.forEach(user => {
      if(user._id === parseInt(req.params.userId)){
        return res.json({msg: 'User deleted'});
      }
    })
  }
}
  

  module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }