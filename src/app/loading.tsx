"use client";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpanLoading = styled.span`
  display: block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border: 4px solid transparent;
  border-top: 4px solid #e6e6e6;
  border-right: 4px solid #e6e6e6;
  animation: ${spin} 1s linear infinite;
  z-index: 2;
`;

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center pt-23">
      <SpanLoading />
    </div>
  );
}
