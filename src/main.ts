import "./style.scss";

const locations = [
  // all locations that celebrate
  "London",
  "New York",
  "San Francisco",
  "Toronto",
];

const linksDiv = document.querySelector("#links");

for (const location of locations) {
  const locLink = document.createElement("a");
  const strippedLocation = location.replace(/\W/, "").toLowerCase();
  locLink.id = `${strippedLocation}-link`;
  locLink.className = "locationLink";
  locLink.innerText = location;
  locLink.href = `/${strippedLocation}`;
  linksDiv?.appendChild(locLink);
}
