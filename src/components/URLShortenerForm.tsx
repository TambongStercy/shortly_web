import React, { useState } from 'react';
import axios from 'axios';
import './URLShortenerForm.css';  // CSS for form styling

interface ShortenedLink {
  original: string;
  shortened: string;
}

interface URLShortenerFormProps {
  onNewLink: (link: ShortenedLink) => void;
}

const URLShortenerForm: React.FC<URLShortenerFormProps> = ({ onNewLink }) => {
  const [url, setUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a valid URL.');
      return;
    }
    setError('');

    const accessToken = import.meta.env.VITE_BITLY_TOKEN;  // Replace with your actual Bit.ly access token

    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        { long_url: url },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const shortenedUrl = response.data.link;
      onNewLink({ original: url, shortened: shortenedUrl });
      setUrl('');  // Clear input after successful shortening
    } catch (err) {
      setError('Failed to shorten the URL. Try again.');
    }
  };

  return (
    <form className="shorten-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className={`input-field ${error ? 'error' : ''}`}
        />
        <button type="submit" className="shorten-button">Shorten It!</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default URLShortenerForm;
