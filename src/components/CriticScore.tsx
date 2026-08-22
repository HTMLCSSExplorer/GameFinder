import { Badge } from '@chakra-ui/react';
interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const color = score > 85 ? 'green' : score >= 75 ? 'yellow' : 'red';

  return (
    <div>
      <Badge
        color={`${color}.100`}
        colorPalette={color}
        paddingY={1}
        paddingX={2}
      >
        {score}
      </Badge>
    </div>
  );
}

export default CriticScore;

// if (score > 85) return 'green';
// if (score >= 75) return 'yellow';
// return 'red';
