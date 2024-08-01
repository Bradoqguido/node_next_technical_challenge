import { useRouter } from 'next/router';
import GameDetail from '../../components/GameDetail';

const GamePage: React.FC = () => {
    const router = useRouter();
    const { gameId } = router.query;

    return gameId ? <GameDetail /> : <div>Loading...</div>;
};

export default GamePage;
