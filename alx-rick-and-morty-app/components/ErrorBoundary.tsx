import React, { Component, ReactNode } from 'react';

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='absolute inset-0 bg-gray-900 flex items-center justify-center font-bold flex-col gap-4'>
          <h2 className='text-4xl text-red-600'>Oops, there is an error!</h2>
          <button onClick={() => this.setState({ hasError: false })} className='border-2 rounded-md bg-transparent text-white p-2 text-base hover:text-base hover:scale-110 transition-all duration-300 ease-in-out'>
            Try again?
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
