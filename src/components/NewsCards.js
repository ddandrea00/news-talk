import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import NewsCard from "./NewsCard";
import "./NewsCards.css";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    text: '"Give me the latest news"',
  },
  {
    color: "#1565c0",
    title: "News By Categories",
    info: 'Business, Sports, Entertainment, General, Health, Science, Sports, Technology',
    text: '"Give me the latest sports news"',
  },
  {
    color: "#4527a0",
    title: "News By Relevant Terms",
    info: 'Bitcoin, Apple iPhone, NBA, Politics...',
    text: '"What\'s up with Bitcoin?"',
  },
  {
    color: "#283593",
    title: "News By Sources",
    info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
    text: '"Give me news from CNN" or "Give news from BBC News"',
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles?.length) {
    return (
      <Grow in>
        <Grid
          className="newsCards_grid"
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="newsCards_infoCard"
            >
              <div
                className="newsCards_card"
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(" ")[2]}:</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className="newsCards_grid"
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
