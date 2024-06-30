import {Fragment} from 'react';

// packages
import {AlertCircle} from 'lucide-react';

// ui components
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';

// components
import {ExternalLink} from '@/components/external-link.component';

export const IncompatibleBrowserAlert = ({
  error,
  openInstructions,
  showSupportedBrowsers,
}: {
  error: string;
  openInstructions: () => void;
  showSupportedBrowsers: () => void;
}) => {
  const userAgent = navigator.userAgent;
  console.log(userAgent);
  const isChrome = userAgent.toLowerCase().includes('chrome');
  const possibleErrors: {
    error: string;
    type: 'browser' | 'version' | 'flag';
    title: string;
    message: React.ReactNode;
  }[] = [
    {
      error:
        'Built-in AI is not ready, check your configuration in chrome://flags/#optimization-guide-on-device-model',
      type: 'flag',
      title: 'Please Enable Flags & Download Model',
      message: (
        <Fragment>
          Built-in AI is not ready.{' '}
          <button
            className="underline hover:opacity-70"
            onClick={() => openInstructions()}
          >
            Follow these instructions
          </button>{' '}
          to enable it.
        </Fragment>
      ),
    },
    {
      error:
        'Your browser is not supported. Please update to 127 version or greater.',
      type: isChrome ? 'version' : 'browser',
      title: isChrome ? 'Please Update Chrome' : 'Please Switch to Chrome',
      message: (
        <Fragment>
          Your browser is{' '}
          <button
            className="underline hover:opacity-70"
            onClick={() => showSupportedBrowsers()}
          >
            not supported
          </button>
          .{' '}
          {isChrome ? (
            'Please update Chrome to version 127 or higher.'
          ) : (
            <Fragment>
              Please switch to Chrome (
              <ExternalLink href="https://www.google.com/chrome/dev/?extra=devchannel">
                Dev
              </ExternalLink>{' '}
              or{' '}
              <ExternalLink href="https://www.google.com/chrome/canary/">
                Canary
              </ExternalLink>
              ).
            </Fragment>
          )}
        </Fragment>
      ),
    },
    {
      error:
        'Prompt API is not available, check your configuration in chrome://flags/#prompt-api-for-gemini-nano',
      message:
        'Prompt API is not available, check your configuration in chrome://flags/#prompt-api-for-gemini-nano',

      type: 'flag',
      title: 'Please Enable Flags',
    },
  ];

  const currentError = possibleErrors.filter((e) => e.error === error)[0] ?? {
    error: '',
    title: 'please try again',
  };

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error: {currentError.title}</AlertTitle>
      <AlertDescription>
        <p>{currentError.message}</p>
      </AlertDescription>
    </Alert>
  );
};
