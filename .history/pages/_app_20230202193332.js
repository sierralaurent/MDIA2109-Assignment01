import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

import { useEffect } from "react";

useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);