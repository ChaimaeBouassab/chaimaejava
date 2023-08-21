import React from 'react';
import product from './product';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
import { Card } from 'react-bootstrap';

const firstName = 'YourFirstName'; // Replace with your first name

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body>
          <Image imageUrl={product.imageUrl} />
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && <Image imageUrl={product.imageUrl} />}
    </div>
  );
}

export default App;
