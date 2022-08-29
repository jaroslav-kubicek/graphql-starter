import React from 'react';

import Card from '@kiwicom/orbit-components/lib/Card';
import Illustration from '@kiwicom/orbit-components/lib/Illustration';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Text from '@kiwicom/orbit-components/lib/Text';
import Button from '@kiwicom/orbit-components/lib/Button';

type Props = {
    children: React.ReactNode;
};

type State = {
    error: Error | null;
};

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { error: null };
    }
  
    static getDerivedStateFromError(error: Error): State {
      return { error };
    }
  
    render() {
      if (this.state.error) {
        return (
            <Card
            title="Error while fetching data from GraphQL"
            titleAs="h2"
            description={(
                <Stack align='center' direction='column'>
                    <Illustration name="Error" />
                    <Text>{this.state.error.message}</Text>
                    <Button onClick={() => this.setState({ error: null })}>Retry</Button>
                </Stack>
            )}
            />
        );
      }
  
      return this.props.children; 
    }
  }
