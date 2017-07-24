'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//=========================================================================================================================================

var APP_ID = "amzn1.ask.skill.28dfc539-a1b2-4798-ba7b-9fb1e919ebe0
";

var SKILL_NAME = "American Revolution Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "Do you want to know a fact about the American Revolution";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================

//=========================================================================================================================================
var data = [
    "The war started on April 19th, 1775.",
    "The 13 anerican colonies fought for their independence.",
    "The War happend because colonists where angry that the King George III of England and Hanover taxed them a lot",
    "The congress chosed George Washington as Commander in-Cheif of all the American Rebel's Armed forces.",
    " 4,435 american soldiers lost there life.",
    "The Battle of Saratoga was the first American Victory.",
    "Colonel William Presscott showed the Britsh at the Battle of Bunker Hill that the Americans could fight a Battle well.",
    "The Declaration of Independence was signed orginally on July 2nd, 1776 but the debated over it and they established the date July 4th, 1776.",
    "The Americans scored an epic victory on Christmas night of 1776 at the Battle of Trenton.",
    "The British sureendered at Yorktown and the Americans won the war.",
    "The Treaty of Paris was signed in 1783 and that year Great Britain acknowledged America's Independece.",
  
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};