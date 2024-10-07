import React from 'react';
import { Card } from 'semantic-ui-react';

const articles = [
  { 
    title: 'Article 1', 
    description: 'An overview of full-stack development best practices.',
    image: 'https://picsum.photos/300/200?random=1',
    username: 'user1'
  },
  { 
    title: 'Article 2', 
    description: 'Integration techniques for various APIs in web apps.',
    image: 'https://picsum.photos/300/200?random=2',
    username: 'user2'
  },
  { 
    title: 'Article 3', 
    description: 'Key concepts of React for building scalable applications.',
    image: 'https://picsum.photos/300/200?random=3',
    username: 'user3'
  },
];

const FeaturedArticles = () => (
  <Card.Group>
    {articles.map((article, index) => (
      <Card key={index}>
        <img src={article.image} alt={article.title} style={{ width: '100%', borderRadius: '5px 5px 0 0' }} />
        <Card.Content>
          <Card.Header>{article.title}</Card.Header>
          <Card.Meta>By {article.username}</Card.Meta>
          <Card.Description>{article.description}</Card.Description>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default FeaturedArticles;
