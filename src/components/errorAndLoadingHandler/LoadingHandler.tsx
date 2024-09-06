import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";

interface ErrorAndLoadingHandlerProps {
  isLoading: boolean;
  children: any;
  error: any;
  refetch: any;
}

const ErrorAndLoadingHandler = ({
  isLoading,
  error,
  refetch,
  children,
}: ErrorAndLoadingHandlerProps) => {
  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <div>Something went wrong.</div>
        <Button variant="contained" color={"success"} onClick={() => refetch()}>
          Retry
        </Button>
      </ErrorContainer>
    );
  }

  return children;
};

const LoadingContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > button {
    margin-top: 10px;
  }
`;

export default ErrorAndLoadingHandler;
