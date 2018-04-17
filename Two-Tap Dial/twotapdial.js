const xapi = require('xapi');

const speedList = (contact) => ({
  "FavCall_1": "user1@brah.webex.com",
  "FavCall_2": "user2@brah.webex.com",
  "FavCall_3": "user3@brah.webex.com",
  "FavCall_4": "user4@brah.webex.com",
  "FavCall_5": "user5@brah.webex.com"
})[contact];

xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if(event.Type == 'clicked'){
    var contactNumber = speedList(event.WidgetId);
    xapi.command('dial', {Number: contactNumber});
  }
});
