SETUP
node 18.17.1

node

```
npm i

npm install @mui/material @mui/icons-material
npm install font-awesome
npm install bootstrap

npm start
```

test

check for express

```
npm ls express
npm install express
```

run the test

```
npm test
```

----------------------------
About this app:

This app is a US News Finder.
The purpose of this web app is for foreign stations to find news articles in the United States to report as international news.
For example, Japanese trains and buses have little monitors/tvs that show weather forecast, commercials and news. They like to show what is happening outside of Japan as 30 second international news.
This web app helps them to see a list of demanding news in the US both in English and Japanese so that it is easy for them to decide articles to pick.


How this app's UI works:

This app has a list of all news articles available on news page (/news).
There is a translation button at the top of the page. If you click the button, the whole list including every single detail in each article swich to japan instantly. If you click it again, it goes back to English. This way, you can find the news you are interested in very quick and click on that to see the whole article.
Once an article is clicked from the list, you will be directed to the page for the article you chose. 
In this page, you will be able to see every single detail on the article. There will be a translation switch as well so that you can see the original article in English as well.
At the buttom of the article, you can jump to the original source of news as well.

How this web app is made:
I used News API (https://newsapi.org/) to get news articles, and store them in my database.
Then I used translation API (https://libretranslate.com/) to translate all the original article information and store them to another database.
This allows me to provide articles in users preferable language as each news article has one unique id regardless of the db. (Original db and Japanese db, same ids store the same news articles.)

https://drive.google.com/file/d/1QIp8CqeJH-BVRGZ7E9if6H-dCtujM4_S/view?usp=drive_link
https://drive.google.com/file/d/1KUoQBjK3S7i9APpTF2CDl30KnHGpklcg/view?usp=drive_link
