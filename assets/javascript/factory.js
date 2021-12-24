// calling media classes
import {Video} from './video.js';
import {Photo} from './photo.js';

export function Factory(mediaInfo) {
    var media = mediaInfo;
    if("video" in media) { // if media is video return video object
        return new Video(media.id, media.photographerId, media.title , media.video, media.tags , media.likes, media.date, media.price, media.alt);
    }else { // if media is a photo return photo object
        return new Photo(media.id, media.photographerId, media.title , media.image, media.tags , media.likes, media.date, media.price, media.alt)
    }
}