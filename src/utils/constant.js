const GOOGLE_API_KEY = 'AIzaSyDqSmPYRPH658ry46Kv27d1oGwws9x7w38'
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`

export const API_OBJ = {
    YOUTUBE_VIDEO_API : `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}` ,
    YOUTUBE_SEARCH_API : `https://www.googleapis.com/youtube/v3/search?part=snippet&q=iphone&key=${GOOGLE_API_KEY}`
}