export function safetyQuery<T extends Element>(
    queryString: string,
    parent: HTMLElement | Document | DocumentFragment = document
): T {
    const result = parent.querySelector<T>(queryString);

    if (!result) {
        throw new Error(`отсутствует: ${queryString}`);
    }

    return result;
}
