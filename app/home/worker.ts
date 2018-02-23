import { User } from "./home.component";

require("globals");

(<any>global).onmessage = (msg) => {
    //var users = [];
    console.log('in Worker onmessage: ', msg.data);
    var i = 0;
    setInterval(()=>{
        var user = (<User>msg.data);
        user.name = `name ${i}`;
        user.lastname = `lastname ${i}`;
        (<any>global).postMessage(user);
        i++;
        },1000);
    ;
};