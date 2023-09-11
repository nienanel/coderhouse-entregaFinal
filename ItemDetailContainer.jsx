import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import axios from 'axios';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`https://my-api.com/items/${id}`)
      .then(response => setItem(response.data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;