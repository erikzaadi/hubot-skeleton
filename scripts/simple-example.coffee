# Description:
#   Example script that listens to http GET and coffee
#
# Dependencies:
#   
#
# Configuration:
#   
#
# Commands:
#   hubot coffee - answers yes please
#
# URLS:
# GET /hubot/ZOMG/<wat> - Notifies room of <wat>
#
# Author:
#   erikzaadi
#

module.exports = (robot) ->
  robot.hear /coffee/i, (res) ->
    res.send "yes please"

  robot.router.get '/hubot/ZOMG/:wat', (req, res) ->
     wat = req.params.wat
     robot.send null, "ZOMG someone sent #{wat}"
     res.send "Ok"
