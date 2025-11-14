export { Page }

function Page({ routeParams }) {
  return (
    <main>
      <h1>Artikel: {routeParams.slug}</h1>
    </main>
  )
}
