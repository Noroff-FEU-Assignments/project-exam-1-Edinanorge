export function displayError(container, error) {
  const errorHtml = ` <div class="error">OOOPS!..Something went wrong!
                        <p>${error}</p>
                      </div>`;
  container.insertAdjacentHTML("beforebegin", errorHtml);
}
