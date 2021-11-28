import {Video} from './video.js';
import {Photo} from './photo.js';

export function Factory(mediaInfo) {
    var media = mediaInfo;
    if("video" in media) {
        return new Video(media.id, media.photographerId, media.title , media.video, media.tags , media.likes, media.date, media.price, media.alt);
    }else {
        return new Photo(media.id, media.photographerId, media.title , media.image, media.tags , media.likes, media.date, media.price, media.alt)
    }
}