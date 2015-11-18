// Description:
//   Example script that replies to WAT, and interacts with the (redis) robot brain
//
// Dependencies:
//   
//
// Configuration:
//   
//
// Commands:
//   @hubot WAT - answers ZOMG ZOMG ZOMG
//   @hubot store <key> <val> - stores <val> at <key>
//   @hubot get <key> - replies with val for <key>
//
// URLS:
//
// Author:
//   erikzaadi


module.exports = function (robot) {
  robot.respond(/WAT/i, function(res){
    res.reply("ZOMG ZOMG ZOMG");
  });

  robot.respond(/store (\w) (\w)/i, function(res){
    var key = res.match[1];
    var val = res.match[2];

    robot.brain.set(key, val);
    res.reply("Done!");
  });

  robot.respond(/get (\w)/i, function(res){
    var key = res.match[1];

    res.reply(robot.brain.get(key) || ("'" + key + "' Not set"));
  });
};
