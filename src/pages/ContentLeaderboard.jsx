import { useState } from 'react';
import { Container, Table, Thead, Tr, Th, Td } from '@nextui-org/react';

const Leaderboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'John', score: 100 },
    { id: 2, name: 'Jane', score: 80 },
    { id: 3, name: 'Bob', score: 70 },
    { id: 4, name: 'Alice', score: 60 },
  ]);

  return (
    <Container maxW="container.lg">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Player Name</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <tbody>
          {players.map((player, index) => (
            <Tr key={player.id}>
              <Td>{index + 1}</Td>
              <Td>{player.name}</Td>
              <Td>{player.score}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Leaderboard;