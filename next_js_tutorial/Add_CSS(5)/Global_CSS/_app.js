// Add css file globally and this css file work only in _app.js not in other js file
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
