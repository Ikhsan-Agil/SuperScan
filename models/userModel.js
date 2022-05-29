module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
  });

  return User;
};

// users
//   .sync({alter: true})
//   .then(() => {
//     return users.findAll();
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element.toJSON());
//     });
//   })
//   .catch((err) => {
//     console.log('Not succes to sync');
//   });

// module.exports = users;