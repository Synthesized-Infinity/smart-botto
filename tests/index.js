const { Bot } = require('../dist')

const chatbot = new Bot({ name: 'Emilia'})
chatbot.chat({ message: 'Hey', user: '2563782'}).then(console.log)