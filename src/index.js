import { header } from "./pageContent";

function application() {
  const app = document.querySelector(".application");

  const headerDiv = header();
  app.appendChild(headerDiv);

  return app;
}

application();
