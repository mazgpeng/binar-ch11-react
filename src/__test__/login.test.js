import { render, screen, fireEvent } from '@testing-library/react';
import { ContentLogin } from '../pages/ContentLogin';

describe('ContentLogin component', () => {
  test('renders login component', () => {
    render(<ContentLogin />);
    const loginText = screen.getByText('log in');
    expect(loginText).toBeInTheDocument();
  });

  test('displays error message when email is not provided', () => {
    render(<ContentLogin />);
    fireEvent.click(screen.getByText('Login'));
    const errorText = screen.getByText('Email is required');
    expect(errorText).toBeInTheDocument();
  });

  test('displays error message when password is not provided', () => {
    render(<ContentLogin />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' }
    });
    fireEvent.click(screen.getByText('Login'));
    const errorText = screen.getByText('Password is required');
    expect(errorText).toBeInTheDocument();
  });

  test('performs login with valid email and password', () => {
    render(<ContentLogin />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('Login'));
  });

  test('performs login with Google', () => {
    render(<ContentLogin />);
    fireEvent.click(screen.getByRole('button', { name: 'Login with Google' }));
  });
});
