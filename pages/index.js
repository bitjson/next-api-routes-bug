import Person from '../components/Person';
import fetch from 'isomorphic-unfetch';

const Index = ({ people }) => (
  <ul>
    {people.map((p, i) => (
      <Person key={i} person={p} />
    ))}
  </ul>
);

Index.getInitialProps = async () => {
  const response = await fetch(
    'https://api-routes-app.bitjson.now.sh/api/people'
  );
  const people = await response.json();

  return { people };
};

export default Index;
