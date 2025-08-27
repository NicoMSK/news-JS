import AppLoader from './appLoader';
import type * as Types from '../types';

type Callback<T> = (data: T) => void;

class AppController extends AppLoader {
    getSources(callback: Callback<Types.SourcesResponse>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: PointerEvent, callback: Callback<Types.NewsResponse>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        if (!target) return;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (!sourceId) return;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    this.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (!target.parentElement) break;
            target = target.parentElement;
        }
    }
}

export default AppController;
