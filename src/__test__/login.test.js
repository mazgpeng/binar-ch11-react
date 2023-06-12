import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ContentLogin } from '../pages/ContentLogin';

jest.mock('react-router', () => ({
  useNavigate: jest.fn()
}));

describe('ContentLogin', () => {
  beforeEach(() => {
    render(<ContentLogin />);
  });

  test('renders login form', () => {});

  test('handles input change', () => {});

  test('handles login button click', async () => {
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    const mockNavigate = jest.fn();
    const mockSignInWithEmailAndPassword = jest.fn(() =>
      Promise.resolve({ user: { accessToken: 'testAccessToken' } })
    );

    jest.mock('../service/firebase', () => ({
      getAuth: jest.fn(() => ({
        signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
        languageCode: ''
      }))
    }));

    const { useNavigate } = require('react-router');
    useNavigate.mockReturnValue(mockNavigate);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    await act(async () => {
      fireEvent.click(loginButton);
    });

    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      'test@example.com',
      'password123'
    );

    await screen.findByText('login successfully');

    expect(mockNavigate).toHaveBeenCalledWith('/home');
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
