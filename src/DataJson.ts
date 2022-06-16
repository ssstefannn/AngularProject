export interface VideosJson {
    videos: Video[];
}

export interface Video {
    thumbnailPicUrl: string;
    length:string;
    title: string;
    author: string;
    pfpUrl: string;
    views: string;
    timeSinceUpload:string;
}