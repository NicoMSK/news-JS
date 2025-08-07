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

class Sources {
    draw(data: Array<SourcesItem>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = util.safetyQuery<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            if (!sourceClone) {
                throw new Error('отсутствует шаблон для ресурса');
            }

            sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
