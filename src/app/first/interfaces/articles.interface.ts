
export interface Article {
    id:               string;
    journal:           string;
    eissn?:            string;
    publication_date?: string;
    article_type?:     string;
    author_display?:   string[];
    abstract:          string[];
    title_display:     string;
    score?:            number;
}
