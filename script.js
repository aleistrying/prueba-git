async function showTeam() {
  const response = await fetch("data/team.json");
  const team = await response.json();
  document.querySelector("#team").innerHTML = team
    .map(
      ({ name, favoriteFood }) => `
        <article>
          <h2>${name}</h2>
          <p>Favorite food: ${favoriteFood}</p>
        </article>`,
    )
    .join("");
}

showTeam();
