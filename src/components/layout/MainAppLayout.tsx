import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A simple, full-page layout component that centers its content both
 * vertically and horizontally. It serves as the main container for pages
 * requiring a focused, centered view, such as the authentication page.
 * 
 * This component directly implements the overall layout requirements, providing a
 * flex container that fills the screen and centers its children.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered and centered within the layout.
 * @param {string} [props.className] - Optional additional CSS classes to apply to the main container.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center min-h-screen bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
