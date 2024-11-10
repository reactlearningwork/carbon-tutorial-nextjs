'use client';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="white">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
