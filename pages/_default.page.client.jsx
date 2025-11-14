export { render }
import React from "react"
import ReactDOM from "react-dom/client"

function render(pageContext) {
  const { Page, routeParams } = pageContext
  ReactDOM.hydrateRoot(document.getElementById("page-view"), <Page routeParams={routeParams} />)
}
