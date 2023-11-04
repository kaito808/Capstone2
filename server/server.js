const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const { Pool } = require("pg");
const cors = require("cors");
const secrets = require("./secrets");

const apiKey = secrets.newsApiKey;
const deepLApiKey = secrets.deepLApiKey;

app.use(cors());

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "data",
//   password: "password",
//   port: 5432,
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM news";

  pool.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error connecting to the database" });
      return;
    }

    res.json(results.rows);
  });
});

app.get("/api/data1", (req, res) => {
  const query = "SELECT * FROM news1";

  pool.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error connecting to the database" });
      return;
    }

    res.json(results.rows);
  });
});
import("node-fetch").then((nodeFetch) => {
  const fetch = nodeFetch.default;

  app.get("/api/fetch-and-insert", async (req, res) => {
    const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      data.articles.forEach(async (article) => {
        const insertQuery =
          "INSERT INTO news (source, author, title, description, url, urlToImage, publishedAt, content) VALUES ($1, $2, $3,$4,$5,$6,$7,$8)";
        const values = [
          article.source,
          article.author,
          article.title,
          article.description,
          article.url,
          article.urlToImage,
          article.publishedAt,
          article.content,
        ];

        try {
          await pool.query(insertQuery, values);
        } catch (error) {
          console.error("Error inserting data into the database:", error);
        }
      });

      res.json({ message: "Data fetched and inserted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error fetching data from the News API" });
    }
  });
});
import("node-fetch").then((nodeFetch) => {
  const fetch = nodeFetch.default;

  app.get("/api/fetch-translate-insert", async (req, res) => {
    try {
      const query = "SELECT * FROM news";
      const { rows } = await pool.query(query);
      const translatedData = [];

      const authKey = deepLApiKey;
      const deepLUrl = "https://libretranslate.com/translate";

      for (const article of rows) {
        const translationData = {
          text: [
            article.title,
            article.description,
            article.author,
            article.content,
          ],
          // ,article.content,article.author,article.url, article.urlToImage,],
        };
        let translationResponseTitle = await fetch(deepLUrl, {
          method: "POST",
          headers: {
            Authorization: `DeepL-Auth-Key ${authKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: translationData.text[0],
            source: "auto",
            target: "ja",
            format: "text",
            api_key: authKey,
          }),
        });

        let translationResponseDesc = await fetch(deepLUrl, {
          method: "POST",
          headers: {
            Authorization: `DeepL-Auth-Key ${authKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: translationData.text[1],
            source: "auto",
            target: "ja",
            format: "text",
            api_key: authKey,
          }),
        });

        let translationResponseAuthor = await fetch(deepLUrl, {
          method: "POST",
          headers: {
            Authorization: `DeepL-Auth-Key ${authKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: translationData.text[2],
            source: "auto",
            target: "ja",
            format: "text",
            api_key: authKey,
          }),
        });

        let translationResponseContent = await fetch(deepLUrl, {
          method: "POST",
          headers: {
            Authorization: `DeepL-Auth-Key ${authKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: translationData.text[3],
            source: "auto",
            target: "ja",
            format: "text",
            api_key: authKey,
          }),
        });

        translationResponseTitle = await translationResponseTitle.json();
        translationResponseDesc = await translationResponseDesc.json();
        translationResponseAuthor = await translationResponseAuthor.json();
        translationResponseContent = await translationResponseContent.json();

        translatedData.push({
          title_ja: translationResponseTitle.translatedText,
          description_ja: translationResponseDesc.translatedText,
          author_ja: translationResponseAuthor.translatedText,
          content_ja: translationResponseContent.translatedText,
          source: article.source,
          url: article.url,
          urlToImage: article.urltoimage,
          publishedAt: article.publishedat,
        });
      }

      // Insert translated data into the news1 table
      for (const article of translatedData) {
        const insertQuery =
          "INSERT INTO news1 (source, author, title, description, url, urlToImage, publishedAt, content) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
        const values = [
          article.source,
          article.author_ja,
          article.title_ja,
          article.description_ja,
          article.url,
          article.urlToImage,
          article.publishedAt,
          article.content_ja,
        ];

        await pool.query(insertQuery, values);
      }

      res.json({
        message: "Data fetched, translated, and inserted successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
