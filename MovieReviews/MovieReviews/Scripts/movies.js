﻿
//order - by-title, by-publication-date, by-opening-date, by-dvd-release-date
//offset - multiple of 20, for paging

//** SEARCH FOR MOVIE
//'http://api.nytimes.com/svc/movies/v2/reviews/search?[optional-param1=value1]&[...]&api-key=' + myApiKey

//** up to 3 of the following FILTERS - omit for all
//query - keywords; matches titles and indexed terms =wild+west or ='wild+west' for exact match
//** no query will search reviews: reviews/search?dvd=Y search for critic picks on dvd
//critics-pick (Y/N) 
//thousand-best (Y/N) - 1000 best movies ever
//dvd (Y/N) - released on dvd yet
//reviewer - 'manohla-dargis'
//publication-date - of review, start and end date: YYYY-MM-DD;YYYY-MM-DD
//opening-date - of movie in NY, single date: YYYY-MM-DD

//** REVIEWER BIOS
//'http://api.nytimes.com/svc/movies/v2/critics/{resource-type}?api-key=' + myApiKey
//resource-type - all | full-time | part-time | reviewer | [reviewer-name]

//The default order of search results is by closest match (a combination of recentness and keyword relevance). 
//The default order of DVD picks is by dvd-release-date. 
//For all other result sets, the default sort order is by publication-date. 



//{
//    "status":"OK",
//    "copyright":"Copyright (c) 2008 The New York Times Company.  All Rights Reserved.",
//    "num_results":8,
//    "results":[
//       {
//           "nyt_movie_id":135855,
//           "display_title":"Big Night",
//           "sort_name":"Big Night",
//           "mpaa_rating":"R",
//           "critics_pick":"Y",
//           "thousand_best":"Y",
//           "byline":"Janet Maslin",
//           "headline":"",
//           "capsule_review":"Restaurateur brothers stake all on one dinner. Succulent comedy.",
//           "summary_short":"",
//           "publication_date":"1996-03-29",
//           "opening_date":"1996-09-20",
//           "dvd_release_date":"1998-04-07",
//           "date_updated":"2008-11-04 03:54:15",
//           "seo-name":"Big-Night",
//           "link":{
//               "type":"article",
//               "url":"http:\/\/movies.nytimes.com\/movie\/
//                      review?res=9501E6DA1539F93AA15750C0A960958260",
//             "suggested_link_text":"Read the New York Times Review of Big Night"
//},
//        "related_urls":[
//           {
//               "type":"overview",
//               "url":"http:\/\/movies.nytimes.com\/movie\/
//                     135855\/Big-Night\/overview",
//              "suggested_link_text":"Overview of Big Night"
//},
//{
//    "type":"showtimes",
//    "url":"http:\/\/movies.nytimes.com\/movie\/
//    135855\/Big-Night\/showtimes",
//    "suggested_link_text":"Tickets & Showtimes for Big Night"
//},
//{
//              "type":"awards",
//              "url":"http:\/\/movies.nytimes.com\/movie\/
//135855\/Big-Night\/details",
//"suggested_link_text":"Cast, Credits & Awards for Big Night"
//},
//{
//    "type":"community",
//    "url":"http:\/\/movies.nytimes.com\/movie\/
//    135855\/Big-Night\/rnr",
//    "suggested_link_text":"Readers' Reviews of Big Night"
//},
//{
//              "type":"trailers",
//              "url":"http:\/\/movies.nytimes.com\/movie\/
//135855\/Big-Night\/trailers",
//"suggested_link_text":"Trailers & Clips for Big Night"
//}
//]
//},
//{
//    "nyt_movie_id":5460,
//    "display_title":"The Big Red One",
//    "sort_name":"Big Red One, The",
//    "mpaa_rating":"",
//    "critics_pick":"N",
//    "thousand_best":"Y",
//    "byline":"Vincent Canby",
//    "headline":"There's No Glory in War, Unless You Mean Survival",
//    "capsule_review":"WWII infantry combat. Powerful, slashing drama.",
//    "summary_short":"",
//    "publication_date":"1980-07-18",
//    "opening_date":null,
//    "dvd_release_date":null,
//    "date_updated":"2008-11-04 03:53:53",
//    "seo-name":"The-Big-Red-One",
//    "link":{
//        "type":"article",
//        "url":"http:\/\/movies.nytimes.com\/2004\/10\/02\/movies\/
//        02red.html",
//        "suggested_link_text":"Read the New York Times Review of The Big Red One"
//    },
//   "related_urls":[
//      {
//          "type":"overview",
//          "url":"http:\/\/movies.nytimes.com\/movie\/
//                5460\/The-Big-Red-One\/overview",
//         "suggested_link_text":"Overview of The Big Red One"
//},
//{
//              "type":"showtimes",
//              "url":"http:\/\/movies.nytimes.com\/movie\/
//5460\/The-Big-Red-One\/showtimes",
//"suggested_link_text":"Tickets & Showtimes for The Big Red One"
//},
//{
//    "type":"awards",
//    "url":"http:\/\/movies.nytimes.com\/movie\/
//    5460\/The-Big-Red-One\/details",
//    "suggested_link_text":"Cast, Credits & Awards for The Big Red One"
//},
//{
//              "type":"community",
//              "url":"http:\/\/movies.nytimes.com\/movie\/
//5460\/The-Big-Red-One\/rnr",
//"suggested_link_text":"Readers' Reviews of The Big Red One"
//},
//{
//    "type":"trailers",
//    "url":"http:\/\/movies.nytimes.com\/movie\/
//    5460\/The-Big-Red-One\/trailers",
//    "suggested_link_text":"Trailers & Clips for The Big Red One"
//}
//]
//},
//...
//]
//}