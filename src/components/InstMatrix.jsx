

import { useEffect, useState } from 'react';
import axios from 'axios';

export const InstMatrix = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Función para obtener los datos del feed de Instagram
    const fetchInstagramFeed = async () => {
      try {
        // Realizar la solicitud a la API de Instagram para obtener el feed
        const response = await axios.get('https://graph.instagram.com/me/media', {
          params: {
            fields: 'id,media_type,media_url,username,timestamp,caption',
            access_token: 'TU_ACCESS_TOKEN', // Reemplaza 'TU_ACCESS_TOKEN' con tu token de acceso
          },
        });

        // Actualizar el estado con los datos del feed
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error al obtener el feed de Instagram:', error);
      }
    };

    // Llamar a la función para obtener el feed cuando el componente se monta
    fetchInstagramFeed();
  }, []);

  return (
    <div>
      <h1>Instagram Feed</h1>
      {posts.map(post => (
        <div key={post.id}>
          <img src={post.media_url} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};
