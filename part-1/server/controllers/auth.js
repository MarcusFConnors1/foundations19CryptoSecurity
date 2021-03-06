const bcryptjs = require('bcryptjs')
const bcrypt = require('bcryptjs/dist/bcrypt')
const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body;
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const existingPass = bcryptjs.compareSync(password, users[i].passHash);
           if(existingPass){
              let secureUser = {...users[i]};
              delete secureUser.passHash;
              return res.status(200).send(secureUser);
            }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} =req.body;
      const salt = bcryptjs.genSaltSync(5);
      const passHash = bcryptjs.hashSync(password, salt);
      let userObj = {
        username,
        email,
        firstName,
        lastName,
        passHash
      };
      users.push(userObj);
      let secureUser = {...userObj};
      delete secureUser.passHash;
      res.status(200).send(secureUser)
    }
}