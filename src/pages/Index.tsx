import * as React from 'react';

import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Authentication/LoginCard';

/**
 * The Index page, serving as the application's login screen.
 * It uses the MainAppLayout to provide a consistent, centered layout
 * and renders the LoginCard as the main content for user authentication.
 * This page is responsible for composing the high-level layout and feature
 * components for the authentication route.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
