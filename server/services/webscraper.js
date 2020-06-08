const request = require('request-promise');
const htmltarget = require('cheerio');
const url = 'https://www.health.com/fitness/strength-training';



module.exports = () => request(url)
    .then(html => {
        let selector = '.category-page-list div.category-page-item .category-page-item-content a'
        let imgSelector = '.category-page-list div.category-page-item .category-page-item-image div.lazy-image'
        let res = htmltarget(selector, html);
        let img = htmltarget(imgSelector, html);
        let listOfArticles = [];

        for (let i = 0; i < res.length; i++) {
            if (!res[i].attribs || listOfArticles.find((e) => res[i].attribs.href == e.href)) continue;

            listOfArticles.push({
                href: res[i].attribs.href,
                text: res[i].attribs["data-tracking-content-headline"],
                img: img[i] && img[i].attribs ? img[i].attribs["data-src"] : null
            })
        }
        return listOfArticles;
    })
    .catch(err => console.error(err));