import { header, body, footer } from "./pageContent";

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

application();
