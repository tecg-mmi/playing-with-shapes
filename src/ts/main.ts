import {settings} from "./settings";

const app = {
    init() {
        this.swissFlagCanvasElement = document.getElementById(settings.swissFlag.id) as HTMLCanvasElement;


        this.ctx = this.swissFlagCanvasElement.getContext("2d");

        this.ctx.fillStyle = settings.swissFlag.backgroundColor;

        this.ctx.fillRect(0, 0, this.swissFlagCanvasElement.width, this.swissFlagCanvasElement.height);



        this.ctx.clearRect(
            (this.swissFlagCanvasElement.width / 2) - (settings.swissFlag.rect.width / 2),
            (this.swissFlagCanvasElement.height / 2) - (settings.swissFlag.rect.height / 2),
            settings.swissFlag.rect.width,
            settings.swissFlag.rect.height
        );

        this.ctx.clearRect(
            (this.swissFlagCanvasElement.width / 2) - (settings.swissFlag.rect2.width / 2),
            (this.swissFlagCanvasElement.height / 2) - (settings.swissFlag.rect2.height / 2),
            settings.swissFlag.rect2.width,
            settings.swissFlag.rect2.height
        );


    },
}

app.init();