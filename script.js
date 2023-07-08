const time = document.querySelectorAll("#time");
const lastTime = document.querySelectorAll("#last-time");
const type = document.querySelectorAll("#type > li");

async function populate(x) {
  const request = new Request("data.json");
  const response = await fetch(request);
  const numberText = await response.text();
  const number = JSON.parse(numberText);
  time.forEach(
    (e, i) =>
      (e.textContent = `${number[i]["timeframes"][`${x}`]["current"]}hrs`)
  );
  lastTime.forEach(
    (e, i) =>
      (e.textContent = `${number[i]["timeframes"][`${x}`]["previous"]}hrs`)
  );
}
type.forEach((e) =>
  e.addEventListener("click", (e) => {
    populate(e.target.textContent.toLowerCase());
  })
);
