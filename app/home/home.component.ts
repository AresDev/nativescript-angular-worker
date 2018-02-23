import { Component, OnInit, NgZone } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private myWorker:Worker;
    private textfieldtext:String;
    private users = [];
    constructor(private ngZone : NgZone) {
    }
    
    ngOnInit(): void {
        this.myWorker = new Worker('./worker');
        this.myWorker.onmessage = (msg) =>{
            this.ngZone.run(()=>{
                this.users.push(msg.data);
                console.log('data ', JSON.stringify(msg.data));
            })
            
        }
    }

    public clear(){
        this.users = [];
        this.textfieldtext = "";
    }
    
    public loadList(){
        for (var i = 0; i < 10; i++) {
            var user = <User>{};
            user.name = `nombre ${i}`;
            user.lastname = `apellido ${i}`;
            this.users.push(user);
        }
        
    }

    public onTap() {
        //this.loadList();

        var user = <User>{};
        user.name = "nombre";
        user.lastname = "apellido"
        this.myWorker.postMessage(user);

    }
}
export interface User{
    name:String,
    lastname:String
}
