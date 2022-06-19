declare module YoutubeResults {
    export class YoutubeResults {
        static query: string;
        static resultsPerPage: number;
        static getResults(query: string, resultsPerPage) : any[];
    }
}