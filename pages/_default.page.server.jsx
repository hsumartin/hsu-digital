export { render }
import ReactDOMServer from "react-dom/server"
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server"

function render(pageContext) {
  const { Page, routeParams } = pageContext
  const pageHtml = ReactDOMServer.renderToString(<Page routeParams={routeParams} />)
  return escapeInject`<!DOCTYPE html>
    <html lang="de">
      <head><meta charset="UTF-8"><title>martinhsu.digital</title></head>
      <body>${dangerouslySkipEscape(pageHtml)}</body>
    </html>`
}
