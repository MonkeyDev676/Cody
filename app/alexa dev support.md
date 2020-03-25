# Alexa Dev Support
##### This Dev Support.md is Made by Alexa Developers
----

#### Permissions

```javascript
let permissions = require('./resources/permissions.json')

if(message.member.roles.some(r=permissions.alexa_devs).includes(r.name)){
  //Has Permissions
} else {
  //Has no Permissions
}
```

#### Multi Message Content

```javascript
else if(msg.content.toLowerCase() === "Play Music" ||
        msg.content.toLowerCase() === "Play Song"){
  
}
```

#### How to add emojis?

```javascript
const emoji = require('./resources/emojis.json');

emoji.alexaloading
```

#### Alexa Docs

**VISIT [ALEXA DOCS](https://alexa-docs.glitch.me/)**