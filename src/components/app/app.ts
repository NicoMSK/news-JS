import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import * as util from '../view/util';

type DataObject = {
    status: string;
    totalResults: number;
    articles: object[];
};

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourcesDiv = util.safetyQuery<HTMLDivElement>('.sources');
        sourcesDiv.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: DataObject) => this.view.drawNews(data))
        );

        this.controller.getSources((data: DataObject) => this.view.drawSources(data));
    }
}

export default App;
