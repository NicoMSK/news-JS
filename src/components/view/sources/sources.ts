import './sources.css';
import * as util from '../util';

type SourcesItem = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

/// делаю настройку темы
type settings = {
    category: string;
    country: number;
    description: object;
    id: Array[];
    language: boolean;
    name: string;
    url: string;
};

class Sources {
    draw(data: Array<SourcesItem>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = util.safetyQuery<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            if (!sourceClone) {
                throw new Error('отсутствует шаблон для ресурса');
            }

            const sourceItemName = util.safetyQuery<HTMLSpanElement>('.source__item-name', sourceClone);
            sourceItemName.textContent = item.name;

            const sourceItemDiv = util.safetyQuery<HTMLDivElement>('.source__item', sourceClone);
            sourceItemDiv.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesDiv = util.safetyQuery<HTMLDivElement>('.sources');
        sourcesDiv.append(fragment);
    }
}

export default Sources;
