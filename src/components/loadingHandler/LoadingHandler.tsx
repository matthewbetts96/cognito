import { CircularProgress } from "@mui/material";
import styled from "styled-components";

interface LoadingHandlerProps {
  isLoading: boolean;
  children: any;
}

const LoadingHandler = ({ isLoading, children }: LoadingHandlerProps) => {
  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
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
`;

export default LoadingHandler;
