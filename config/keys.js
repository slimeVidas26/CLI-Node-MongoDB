const dbuser = 'isaac';
 const dbpassword = 'trottinette';


  module.exports = {
    mongoURI: `mongodb+srv://${dbuser}:${dbpassword}@cluster0.m86hq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    secretOrKey: "secret"
  };

