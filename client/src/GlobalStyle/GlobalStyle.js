import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

h1 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
}

h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
}

h3,p,span {
  font-size: 1rem;
  line-height: 1.5rem;
}

h4 {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

h5 {
  font-size: 0.75rem;
  line-height: 1rem;
}


@media (max-width: 700px) {
  html {
    font-size: 70%;
  }
}

.dialog .dialog-panel .toolbar .icon {
  opacity: 1 !important;
}


.swal2-modal{
  background-color: ${({ theme }) => theme.colors.bg.primary};
  .swal-icon--success__hide-corners{
     width: 6px;
      background: ${({ theme }) => theme.colors.bg.primary}
  }
  .swal-icon--success:after, .swal-icon--success:before {
    background: ${({ theme }) => theme.colors.bg.primary};
  }
  .swal2-title, .swal-text{
    color: ${({ theme }) => theme.colors.heading.primary} !important;
  }
  .swal2-html-container{
    font-size: 1.125rem
  }
}




.swal2-styled{
  color: white;
  outline: none;
  &:focus{
    outline: none !important;
    box-shadow: none !important;
  }
  &:hover{
    background-color: rgb(59 130 246) !important;
  }
}
.swal2-cancel{
  background-color: rgb(59 130 246) !important;
}

.swal2-confirm{
  background-color: rgb(239 68 68) !important;
  &:hover{
    background-color: rgb(239 68 68) !important;
  }
}
.note-category{
      .purple{
        background-color: rgb(192, 132, 252);
      }
      .blue{
        background-color: rgb(59 130 246);
        color: white;
      }
      .green{
        background-color: rgb(52 211 153);
        
      }
    }

`