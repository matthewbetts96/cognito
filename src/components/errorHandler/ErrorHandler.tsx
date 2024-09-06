import { Button } from "@mui/material";
import { styled } from "styled-components";

interface ErrorHandlerProps {
  error: any;
  refetch: any;
  children: any;
}

const ErrorHandler = ({ error, refetch, children }: ErrorHandlerProps) => {
  if (error) {
    return (
      <Container>
        <div>Something went wrong.</div>
        <Button variant="contained" color={"success"} onClick={() => refetch()}>
          Retry
        </Button>
      </Container>
    );
  }

  return children;
};

const Container = styled.div`
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

export default ErrorHandler;
