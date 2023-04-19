import { header, body, footer, loadingContainer } from "./pageContent";
import { toggleLoadingSpinner } from "./weatherApi";

function loadingDiv() {
  const main = loadingContainer();

  return main;
}

function application() {
  const app = document.querySelector(".application");

  const headerDiv = header();
  app.appendChild(headerDiv);

  const bodyDiv = body();
  app.appendChild(bodyDiv);

  const footerDiv = footer();
  app.appendChild(footerDiv);

  return app;
}

loadingDiv();
application();
toggleLoadingSpinner();
