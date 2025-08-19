import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import * as util from '../view/util';

type ArticleValues = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
};

type Source = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

type DataObject = {
    status: string;
    totalResults: number;
    articles: ArticleValues[];
};

type DataSources = {
    sources: Source[];
    status: string;
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

        this.controller.getSources((data: DataSources) => this.view.drawSources(data));
    }
}

export default App;
