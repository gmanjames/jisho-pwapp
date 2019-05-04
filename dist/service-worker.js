'use strict';

const CACHE_NAME = 'jisho-cache-v1';

let urlsToCache = [
    '/index.html',
    '/main.js',
    '/css/normalize.css',
    '/css/style.css'
];

self.addEventListener('install', function(event) {
    // implement
});