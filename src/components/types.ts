export type Article = {
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

export type Source = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

export type NewsResponse = {
    status: string;
    totalResults: number;
    articles: Article[];
};

export type SourcesResponse = {
    sources: Source[];
    status: string;
};
