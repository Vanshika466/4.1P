import React from 'react';
import { Card } from 'semantic-ui-react';

const tutorials = [
  { 
    title: 'Tutorial 1', 
    description: 'Setting up a basic React application.',
    image: 'https://picsum.photos/300/200?random=4',
    username: 'userA'
  },
  { 
    title: 'Tutorial 2', 
    description: 'Using hooks and context in React applications.',
    image: 'https://picsum.photos/300/200?random=5',
    username: 'userB'
  },
];

const Tutorials = () => (
  <Card.Group>
    {tutorials.map((tutorial, index) => (
      <Card key={index}>
        <img src={tutorial.image} alt={tutorial.title} style={{ width: '100%', borderRadius: '5px 5px 0 0' }} />
        <Card.Content>
          <Card.Header>{tutorial.title}</Card.Header>
          <Card.Meta>By {tutorial.username}</Card.Meta>
          <Card.Description>{tutorial.description}</Card.Description>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default Tutorials;
