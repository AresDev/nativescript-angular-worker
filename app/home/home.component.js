"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(ngZone) {
        this.ngZone = ngZone;
        this.users = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myWorker = new Worker('./worker');
        this.myWorker.onmessage = function (msg) {
            _this.ngZone.run(function () {
                _this.users.push(msg.data);
                console.log('data ', JSON.stringify(msg.data));
            });
        };
    };
    HomeComponent.prototype.clear = function () {
        this.users = [];
        this.textfieldtext = "";
    };
    HomeComponent.prototype.loadList = function () {
        for (var i = 0; i < 10; i++) {
            var user = {};
            user.name = "nombre " + i;
            user.lastname = "apellido " + i;
            this.users.push(user);
        }
    };
    HomeComponent.prototype.onTap = function () {
        //this.loadList();
        var user = {};
        user.name = "nombre";
        user.lastname = "apellido";
        this.myWorker.postMessage(user);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQU8xRDtJQUlJLHVCQUFvQixNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUQzQixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFVBQUMsR0FBRztZQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUE7UUFFTixDQUFDLENBQUE7SUFDTCxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0ksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQixJQUFJLElBQUksR0FBUyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFVLENBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBRyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFFTCxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNJLGtCQUFrQjtRQUVsQixJQUFJLElBQUksR0FBUyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUE7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsQ0FBQztJQXpDUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUsrQixhQUFNO09BSjFCLGFBQWEsQ0EwQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBteVdvcmtlcjpXb3JrZXI7XHJcbiAgICBwcml2YXRlIHRleHRmaWVsZHRleHQ6U3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB1c2VycyA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmUgOiBOZ1pvbmUpIHtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teVdvcmtlciA9IG5ldyBXb3JrZXIoJy4vd29ya2VyJyk7XHJcbiAgICAgICAgdGhpcy5teVdvcmtlci5vbm1lc3NhZ2UgPSAobXNnKSA9PntcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzLnB1c2gobXNnLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgJywgSlNPTi5zdHJpbmdpZnkobXNnLmRhdGEpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpe1xyXG4gICAgICAgIHRoaXMudXNlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnRleHRmaWVsZHRleHQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgbG9hZExpc3QoKXtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHVzZXIgPSA8VXNlcj57fTtcclxuICAgICAgICAgICAgdXNlci5uYW1lID0gYG5vbWJyZSAke2l9YDtcclxuICAgICAgICAgICAgdXNlci5sYXN0bmFtZSA9IGBhcGVsbGlkbyAke2l9YDtcclxuICAgICAgICAgICAgdGhpcy51c2Vycy5wdXNoKHVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXAoKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRMaXN0KCk7XHJcblxyXG4gICAgICAgIHZhciB1c2VyID0gPFVzZXI+e307XHJcbiAgICAgICAgdXNlci5uYW1lID0gXCJub21icmVcIjtcclxuICAgICAgICB1c2VyLmxhc3RuYW1lID0gXCJhcGVsbGlkb1wiXHJcbiAgICAgICAgdGhpcy5teVdvcmtlci5wb3N0TWVzc2FnZSh1c2VyKTtcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBVc2Vye1xyXG4gICAgbmFtZTpTdHJpbmcsXHJcbiAgICBsYXN0bmFtZTpTdHJpbmdcclxufVxyXG4iXX0=