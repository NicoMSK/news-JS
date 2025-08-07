export function safetyQuery<T extends Element>(queryString: string): T {
    const result = document.querySelector<T>(queryString);

    if (!result) {
        throw new Error('отсутствует шаблон для новости');
    }

    return result;
}
