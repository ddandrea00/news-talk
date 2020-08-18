import React, {useState, useEffect, createRef } from "react";
import "./NewsCard.css";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import classNames from 'classnames';


const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
  const[elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if(i === activeArticle && elRefs[activeArticle]){
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs])
  return (
    <Card ref={elRefs[i]} className={classNames("newsCard", activeArticle === i ? "newsCard_activeCard" : null)}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className="newsCard_cardMedia"
          image={
            urlToImage ||
            "https://www.canva.com/design/DAEFJkJK3jI/gSEL1UpP6ReONTx_0yBDWQ/view?utm_content=DAEFJkJK3jI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          }
        />
        <div className="newsCard_details">
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
        >{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
          >{source.name}</Typography>
        </div>
        <Typography className="newsCard_title" gutterBottom variant="h5">{title}</Typography>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="newsCard_cardActions">
        <Button size="small" color="primary">Read More</Button>
        <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
