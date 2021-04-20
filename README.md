<div align="center">

# _**SMART BOTTO**_

> Smart(est) chatbot 
> Based on EIF APIs
>
</div><br/>
<br/>

# Installation
```cmd
> npm i smart-botto
```

# Usage 

```JS
const { Bot } = require('smart-botto')
//import { Bot } from 'smart-botto'

const chatbot = new Bot({
    name: 'Emilia' //name of the bot
})

chatbot.chat({
    message: 'Hey', //message to pass to chatbot,
    user: 'USERID' //ID of the user to keep track of the convo
})
.then((res) => console.log(res)) 
/* {
    message: 'Hey',
    response: 'Hi there!'
} */
```