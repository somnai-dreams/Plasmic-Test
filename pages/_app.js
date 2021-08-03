import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/loader"

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  )
}

export default MyApp