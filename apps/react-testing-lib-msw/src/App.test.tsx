import { describe, expect, it } from 'vitest';
import { render, screen, userEvent, waitForElementToBeRemoved } from './utils/test-utils';
import App from './App';

describe('test', () => {

  it('Should return greeting when cliking button with common', async () => {
    render(
      <App/>
    );

    expect(screen.getByRole('heading', {name: 'MSW Testing Library Example', level: 1})).toBeDefined();

    userEvent.click(screen.getByRole('button', {name: 'Fetch Greeting with Common'}));

    await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'), {
      timeout: 3500
    });
    expect(screen.getByText('hi')).toBeDefined();
  });

  it('Should return greeting when cliking button with cross-fetch', async () => {
    render(
      <App/>
    );

    expect(screen.getByRole('heading', {name: 'MSW Testing Library Example', level: 1})).toBeDefined();

    userEvent.click(screen.getByRole('button', {name: 'Fetch Greeting with CrossFetch'}));

    await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'), {
      timeout: 3500
    });
    expect(screen.getByText('hi')).toBeDefined();
  });

})
