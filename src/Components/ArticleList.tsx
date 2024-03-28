//ArticleList serve a visualizzare una lista di articoli recuperati da un'API. In particolare, esegue le seguenti funzioni

import React, { useState, useEffect } from "react";

import { Card, Col, Row } from "react-bootstrap";

interface Article {
  id: string;
  title: string;
}

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore durante il recupero degli articoli");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dati ricevuti:", data);

        if (data.results && Array.isArray(data.results)) {
          setArticles(data.results);
        } else {
          throw new Error("I dati ottenuti non sono nel formato corretto");
        }
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <Row xs={1} sm={2} md={3} lg={5} className="g-4">
      {articles.map((article) => (
        <Col key={article.id}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              {/* altre informazioni dell'articolo, come data di pubblicazione, immagine di copertina, ecc. */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default ArticleList;
