'use client'
import MyLoader from "./skeleton";
import styled from "styled-components";

const LoaderContainer = styled.div`
   position: absolute;
   top: 50%
   left: 50%
`;

export default function Loading() {
    return <LoaderContainer>
                <MyLoader></MyLoader>
            </LoaderContainer>;
  }