import React from 'react';
import './ShortenedLinkList.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface ShortenedLink {
  original: string;
  shortened: string;
}

interface ShortenedLinkListProps {
  links: ShortenedLink[];
}

const ShortenedLinkList: React.FC<ShortenedLinkListProps> = ({ links }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    // Set the "Copied!" state for 2 seconds, then revert it back to "Copy"
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);  // 2000 ms = 2 seconds
  };

  return (
    <div className="link-list">
      {links.map((link, index) => (
        <div key={index} className="link-item">
          <p className="original-link">{link.original}</p>
          <div className="shortened-link-container">
            <a href={link.shortened} target="_blank" rel="noopener noreferrer" className="shortened-link">
              {link.shortened}
            </a>
            <CopyToClipboard text={link.shortened} onCopy={() => handleCopy(index)}>
              <button className={`copy-button ${copiedIndex === index ? 'copied' : ''}`}>
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortenedLinkList;
