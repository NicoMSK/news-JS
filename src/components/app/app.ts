import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import * as util from '../view/util';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        // debugger;
        const sourcesDiv = util.safetyQuery<HTMLDivElement>('.sources');
        sourcesDiv.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
