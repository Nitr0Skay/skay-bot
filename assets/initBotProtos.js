export default function() {
  import saySomething from '../bot_modules/saySomething.js';
  import createAnswerBox from '../bot_modules/createAnswerBox.js';
  import createChatBox from '../bot_modules/createChatBox.js';
  import createHelpList from '../bot_modules/createHelpList.js';
  import greeting from '../bot_modules/greeting.js';
  import askName from '../bot_modules/askName.js';

  Bot.prototype.saySomething = saySomething;
  Bot.prototype.createAnswerBox = createAnswerBox;
  Bot.prototype.createChatBox = createChatBox;
  Bot.prototype.createHelpList = createHelpList;
  Bot.prototype.greeting = greeting;
  Bot.prototype.askName = askName;
}
