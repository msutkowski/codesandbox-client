import styled, { css } from 'styled-components';

export const DocumentationContent = styled.div`
  ${({ theme }) => css`
    line-height: 1.4;
    font-feature-settings: normal;
    font-size: 16px;

    * {
      box-sizing: border-box;
    }

    iframe {
      display: block;
      margin: 40px auto;
      border: 0;
      outline: 0;
    }

    h2 {
      font-size: 24px;
      margin: 16px 0;
      display: block;
    }

    h3 {
      font-size: 20px;
      margin: 16px 0;
      display: block;
    }

    section {
      overflow-x: auto;
    }

    a {
      color: white;
    }

    .gatsby-resp-image-link {
      display: block;
    }

    table {
      max-width: 100%;
      overflow: scroll;
      display: block;
    }

    code {
      background: #151515;
      padding: 0.2em 0.4em;
      font-size: 85%;
      margin: 0;
      border-radius: 3px;
    }

    span.gatsby-resp-image-background-image {
      padding-bottom: 0 !important;
    }

    img.gatsby-resp-image-image {
      border: 1px solid #242424;
      border-radius: 4px;
      margin: 40px 0 !important;
      display: block;
      position: relative;
    }

    code,
    pre {
      font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New,
        monospace;
    }

    .anchor {
      fill: ${theme.secondary};
    }

    .gatsby-highlight {
      background: #151515;
      padding: 0.5rem;
      border-radius: 4px;
      margin-bottom: 1rem;

      pre {
        margin-bottom: 0;
      }

      code {
        background-color: transparent;
        padding: 0;
        margin: 0;
        font-size: 100%;
        height: auto !important;
        line-height: 20px;
        white-space: pre-wrap;
        word-break: break-word;
      }
    }

    .token.comment {
      color: #5c6370;
      font-style: italic;
    }
    .token.keyword {
      color: #c678dd;
    }
    .token.selector {
      color: #c678dd;
    }
    .token.changed {
      color: #c678dd;
    }
    .token.operator {
      color: #abb2bf;
    }
    .token.property {
      color: #abb2bf;
    }
    .token.constant {
      color: #d19a66;
    }
    .token.number {
      color: #d19a66;
    }
    .token.builtin {
      color: #d19a66;
    }
    .token.attr-name {
      color: #d19a66;
    }
    .token.char {
      color: #56b6c2;
    }
    .token.symbol {
      color: #56b6c2;
    }
    .token.variable {
      color: #e06c75;
    }
    .token.tag {
      color: #e06c75;
    }
    .token.deleted {
      color: #e06c75;
    }
    .token.string {
      color: #98c379;
    }
    .token.inserted {
      color: #98c379;
    }
    .token.punctuation {
      color: #5c6370;
    }
    .token.function {
      color: #61afef;
    }
    .token.class-name {
      color: #e5c07b;
    }
    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }
  `};
`;
