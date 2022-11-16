import { css, Global, keyframes, Keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }

      @media (prefers-color-scheme: dark) {
        html {
          color-scheme: dark;
        }
        body {
          color: white;
          background: black;
        }
      }
    `}
  />
)
