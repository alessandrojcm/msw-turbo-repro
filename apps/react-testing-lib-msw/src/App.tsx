import * as React from 'react';
import common from 'common/index';
import fetch from 'cross-fetch';

function App () {
  const [greeting, setGreeting] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchPostsWithCommon = async () => {
    setIsLoading(true);
    await common.get('https://my.domain/greet')
      .then(r => r.json())
      .then(greeting => setGreeting(greeting.response));

    setIsLoading(false);
  };

  const fetchPostsWithCrossFetch = async () => {
    setIsLoading(true);
    await fetch('https://my.domain/greet')
      .then(r => r.json())
      .then(greeting => setGreeting(greeting.response));

    setIsLoading(false);
  }

  return (
    <main className="App">
      <h1>MSW Testing Library Example</h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {greeting}
      <button onClick={() => fetchPostsWithCommon()}>Fetch Greeting with Common</button>
      <button onClick={() => fetchPostsWithCrossFetch()}>Fetch Greeting with CrossFetch</button>
    </main>
  );
}

export default App;
