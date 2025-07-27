const config = {
  production: {
    SECRET: process.env.JWT_SECRET,
    DATABASE: process.env.MONGO_URI,
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
