import React from 'react';

// packages
import ReactMarkdown, {Options} from 'react-markdown';

export const MemoizedReactMarkdown: React.FC<Options> = React.memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className,
);
