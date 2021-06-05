import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import VictualItem from './VictualItem/VictualItem';
import classes from './AvailableVictuals.module.css';

const AvailableVictuals = () => {
  const [victuals, setVictuals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchVictuals = async () => {
      const response = await fetch(
        'https://fitvictuals-d2d35-default-rtdb.europe-west1.firebasedatabase.app/victuals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedVictuals = [];

      for (const key in responseData) {
        loadedVictuals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setVictuals(loadedVictuals);
      setIsLoading(false);
    };

    fetchVictuals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.VictualsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.VictualsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const victualsList = victuals.map((victual) => (
    <VictualItem
      key={victual.id}
      id={victual.id}
      name={victual.name}
      description={victual.description}
      price={victual.price}
    />
  ));

  return (
    <section className={classes.victuals}>
      <Card>
        <ul>{victualsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableVictuals;
