// @ts-ignore
import { initCursorChat } from "cursor-chat";
import "./style.scss";

initCursorChat("html-portal-home");

const locations = [
  // All locations that celebrate in alphabetical order.
  "Boston",
  "Berlin",
  "London",
  "New York",
  "Rotterdam",
  "San Francisco",
  "Seattle",
  "Toronto",
];

const linksDiv = document.querySelector("#links");

for (const location of locations) {
  const locLink = document.createElement("a");
  const strippedLocation = location.replace(/\W/, "").toLowerCase();
  locLink.id = `${strippedLocation}-link`;
  locLink.className = "locationLink";
  locLink.innerText = location;
  locLink.href = `/${strippedLocation}.html`;
  linksDiv?.appendChild(locLink);
}
