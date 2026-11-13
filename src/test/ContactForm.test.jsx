import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import ContactForm from '../components/ContactForm';

describe('ContactForm Component', () => {
  it('renders form fields correctly', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/First name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Type your message here/i)).toBeInTheDocument();
  });

  it('disables submit button initially when form is empty', () => {
    render(<ContactForm />);
    const submitBtn = screen.getByRole('button', { name: /Отправить/i });
    expect(submitBtn).toBeDisabled();
  });
});
