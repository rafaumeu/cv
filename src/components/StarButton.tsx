import { Star } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';
import { useIntl } from 'react-intl';

interface StarButtonProps {
  stars: number;
  repoUrl: string;
  isStarred?: boolean;
}

export const StarButton = ({ stars, repoUrl, isStarred = false }: StarButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const intl = useIntl();

  const handleClick = () => {
    window.open(`${repoUrl}/stargazers`, '_blank');
  };

  const tooltipMessage = stars === 0 
    ? intl.formatMessage({ id: 'projects.star.empty' })
    : intl.formatMessage({ id: 'projects.star.tooltip' });

  return (
    <Tooltip content={tooltipMessage}>
      <Button
        variant="ghost"
        size="sm"
        className="gap-1 px-2 hover:bg-yellow-100 dark:hover:bg-yellow-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <Star
          size={16}
          className={`
            transition-colors duration-200
            ${isStarred || isHovered ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'}
          `}
        />
        <span className={`
          text-sm
          ${isStarred || isHovered ? 'text-yellow-500' : 'text-gray-400'}
        `}>
          {stars}
        </span>
      </Button>
    </Tooltip>
  );
}; 