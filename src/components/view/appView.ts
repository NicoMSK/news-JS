import News from './news/news';
import Sources from './sources/sources';
import type * as Types from '../types';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Types.NewsResponse) {
        const values = data.articles || [];
        this.news.draw(values);
    }

    drawSources(data: Types.SourcesResponse) {
        const values = data.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
