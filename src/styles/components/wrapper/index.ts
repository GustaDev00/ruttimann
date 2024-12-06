import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 10rem 12rem;
  z-index: 2;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 3.5rem 4rem;
    flex-direction: column; 
  `}

  ${mediaMaxWidth("mobile")`
    padding: 4.5rem 1.9rem;
  `}
`;
