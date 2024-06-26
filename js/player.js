const player_controls = `
    <div class="light"></div>
      <svg class="loader" viewBox="25 25 50 50" stroke-width="5">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
      <p class="caption-text">
        <mark></mark>
      </p>
      <div class="video-controls-container">
        <div class="timeline-container">
          <div class="timeline">
            <div class="preview-thumb" data-time="0:00">
              <div></div>
            </div>
            <div class="thumb-indicator"></div>
            <canvas class="loaded-progress"></canvas>
          </div>
        </div>
        <div class="controls">
          <button class="play-pause-btn">
            <svg fill="currentColor" height="24">
              <use xlink:href="#play-icon-fill"></use>
            </svg>
          </button>
          <div class="volume-container">
            <button class="mute-btn">
              <svg fill="currentColor" height="24">
                <use xlink:href="#volume-high-icon"></use>
              </svg>
            </button>
            <input type="range" min="0" max="1" step="any" value="1" class="volume-slider desktop-item">
          </div>
          <div class="duration-container">
            <span class="current-time">0:00</span>
            <span>/</span>
            <span class="total-time">-</span>
          </div>
          <div class="auto-play desktop-item"></div>
          <button class="caption-btn desktop-item">
            <svg fill="currentColor" height="24">
              <use xlink:href="#subtitle-icon"></use>
            </svg>
          </button>
          <button class="settings-btn">
            <svg fill="currentColor" height="24">
              <use xlink:href="#cog-icon"></use>
            </svg>
          </button>
          <button class="pip-btn  desktop-item">
            <svg fill="currentColor" height="24">
              <use xlink:href="#pip-icon-fill"></use>
            </svg>
          </button>
          <button class="cinema-btn  desktop-item">
            <svg fill="currentColor" height="24">
              <use xlink:href="#cinema-tall-icon-fill"></use>
            </svg>
          </button>
          <button class="fullscreen-btn">
            <svg fill="currentColor" height="24">
              <use xlink:href="#fullscreen-open-icon-fill"></use>
            </svg>
          </button>
        </div>
        <div class="settings-menu">
          <div class="wrapper">
            <ul class="main-section">
              <li class="ambiant-light">
                <label>
                  <span>
                    <svg viewBox="0 0 24 24" fill="currentColor" height="24">
                      <use xlink:href="#cinema-light"></use>
                    </svg>
                  </span>
                  <span>Eclairage de cinema</span>
                  <div class="icon arrow">
                    <div class="cl-switch">
                      <input type="checkbox" class="cinema-light-check">
                      <span></span>
                    </div>
                  </div>
                </label>
              </li>
              <li class="drop-item" data-drop="quality-drop">
                <span>
                  <svg viewBox="0 0 48 48" fill="currentColor" height="24">
                    <use xlink:href="#tune-icon"></use>
                  </svg>
                </span>
                <span>Qualité</span>
                <div class="icon arrow">
                  <svg viewBox="0 0 48 48" fill="currentColor">
                    <use xlink:href="#chevron-right-icon"></use>
                  </svg>
                </div>
              </li>
              <li class="drop-item" data-drop="captions-drop">
                <span>
                  <svg viewBox="0 0 48 48" height="24" fill="currentColor">
                    <use xlink:href="#caption-icon"></use>
                  </svg>
                </span>
                <span>Sous-titres</span>
                <div class="icon arrow">
                  <svg viewBox="0 0 48 48" fill="currentColor">
                    <use xlink:href="#chevron-right-icon"></use>
                  </svg>
                </div>
              </li>
              <li class="loop-line">
                <label>
                  <span>
                    <svg viewBox="0 0 48 48" height="24" fill="currentColor">
                      <use xlink:href="#repeat-one"></use>
                    </svg>
                  </span>
                  <span>Lecture en boucle</span>
                  <div class="icon arrow">
                    <div class="cl-switch">
                      <input type="checkbox" class="loop-check" >
                      <span></span>
                    </div>
                  </div>
                </label>
              </li>
              <li class="drop-item desktop-item" data-drop="speed-drop">
                <span>
                  <svg viewBox="0 0 48 48" fill="currentColor" height="24">
                    <use xlink:href="#playback-speed"></use>
                  </svg>
                </span>
                <span>Vitesse de lecture</span>
                <div class="icon arrow">
                  <svg viewBox="0 0 48 48" fill="currentColor">
                    <use xlink:href="#chevron-right-icon"></use>
                  </svg>
                </div>
              </li>
              <li class="drop-item" data-drop="info-user-drop">
                <span>
                  <svg viewBox="0 0 48 48" fill="currentColor" height="24">
                    <use xlink:href="#info-fill"></use>
                  </svg>
                </span>
                <span>Infos sur la chaine</span>
                <div class="icon arrow">
                  <svg viewBox="0 0 48 48" fill="currentColor">
                    <use xlink:href="#chevron-right-icon"></use>
                  </svg>
                </div>
              </li>
            </ul>
            <div class="drop quality-drop" id="quality-drop">
              <div class="label">
                <span class="back-icon">
                  <svg viewBox="0 0 24 24" height="24" fill="currentColor">
                    <use xlink:href="#chevron-left-icon"></use>
                  </svg>
                </span>
                <span>Qualité</span>
              </div>
              <ul></ul>
            </div>
            <div class="drop captions-drop">
              <div class="label">
                <span class="back-icon">
                  <svg viewBox="0 0 24 24" height="24" fill="currentColor">
                    <use xlink:href="#chevron-left-icon"></use>
                  </svg>
                </span>
                <span>Sous-titre</span>
              </div>
              <ul>

              </ul>
            </div>
            <div class="drop speed-drop desktop-item">
              <div class="label">
                <span class="back-icon">
                  <svg viewBox="0 0 24 24" height="24" fill="currentColor">
                    <use xlink:href="#chevron-left-icon"></use>
                  </svg>
                </span>
                <span>Vitesse de lecture</span>
              </div>
              <ul>
                <li data-speed="0.5">
                  <div class="check"></div>
                  <span>0.5</span>
                </li>
                <li data-speed="0.75">
                  <div class="check"></div>
                  <span>0.75</span>
                </li>
                <li data-speed="1">
                  <div class="check active"></div>
                  <span>Normale</span>
                </li>
                <li data-speed="1.5">
                  <div class="check"></div>
                  <span>1.5</span>
                </li>
                <li data-speed="2">
                  <div class="check"></div>
                  <span>2</span>
                </li>
                <li data-speed="2.5">
                  <div class="check"></div>
                  <span>2.5</span>
                </li>
              </ul>
            </div>
            <div class="drop info-user-drop">
              <div class="label">
                <span class="back-icon">
                  <svg viewBox="0 0 24 24" height="24" fill="currentColor">
                    <use xlink:href="#chevron-left-icon"></use>
                  </svg>
                </span>
                <span>Infos sur la chaine</span>
              </div>
              <div class="info-drop">
                <div class="channel-profile">
                  <img src="https://ochokom.github.io/videos-ocho/profil.jpg" alt="profile">
                </div>
                <p>Martin Ocho</p>
                <button>S'abonner</button>
                <button>Afficher la chaine</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
const player_svgs = `
    <svg style="display: none;">
    <symbol id="play-icon-fill" viewbox="0 0 24 24">
      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </symbol>
    <symbol id="pause-icon-fill" viewbox="0 0 24 24">
      <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
    </symbol>
    <symbol id="volume-high-icon" viewbox="0 0 48 48">
      <path
        d="M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z" />
    </symbol>
    <symbol id="volume-low-icon" viewbox="0 0 48 48">
      <path
        d="M10 30V18h8L28 8v32L18 30Zm21 2.4V15.55q2.7.85 4.35 3.2Q37 21.1 37 24q0 2.95-1.65 5.25T31 32.4Zm-6-16.8L19.35 21H13v6h6.35L25 32.45ZM18.9 24Z" />
    </symbol>
    <symbol id="volume-muted-icon" viewbox="0 0 48 48">
      <path
        d="m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z" />
    </symbol>
    <symbol id="subtitle-icon" viewbox="0 0 48 48">
      <path
        d="M12 24.5h3v-3h-3Zm0 6h18v-3H12Zm21 0h3v-3h-3Zm-15-6h18v-3H18ZM7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V11H7v26Zm0 0V11v26Z" />
    </symbol>
    <symbol id="pip-icon-fill" viewbox="0 0 24 24">
      <path
        d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z" />
    </symbol>
    <symbol id="cog-icon" viewbox="0 0 48 48">
      <path
        d="m19.4 44-1-6.3q-.95-.35-2-.95t-1.85-1.25l-5.9 2.7L4 30l5.4-3.95q-.1-.45-.125-1.025Q9.25 24.45 9.25 24q0-.45.025-1.025T9.4 21.95L4 18l4.65-8.2 5.9 2.7q.8-.65 1.85-1.25t2-.9l1-6.35h9.2l1 6.3q.95.35 2.025.925Q32.7 11.8 33.45 12.5l5.9-2.7L44 18l-5.4 3.85q.1.5.125 1.075.025.575.025 1.075t-.025 1.05q-.025.55-.125 1.05L44 30l-4.65 8.2-5.9-2.7q-.8.65-1.825 1.275-1.025.625-2.025.925l-1 6.3ZM24 30.5q2.7 0 4.6-1.9 1.9-1.9 1.9-4.6 0-2.7-1.9-4.6-1.9-1.9-4.6-1.9-2.7 0-4.6 1.9-1.9 1.9-1.9 4.6 0 2.7 1.9 4.6 1.9 1.9 4.6 1.9Zm0-3q-1.45 0-2.475-1.025Q20.5 25.45 20.5 24q0-1.45 1.025-2.475Q22.55 20.5 24 20.5q1.45 0 2.475 1.025Q27.5 22.55 27.5 24q0 1.45-1.025 2.475Q25.45 27.5 24 27.5Zm0-3.5Zm-2.2 17h4.4l.7-5.6q1.65-.4 3.125-1.25T32.7 32.1l5.3 2.3 2-3.6-4.7-3.45q.2-.85.325-1.675.125-.825.125-1.675 0-.85-.1-1.675-.1-.825-.35-1.675L40 17.2l-2-3.6-5.3 2.3q-1.15-1.3-2.6-2.175-1.45-.875-3.2-1.125L26.2 7h-4.4l-.7 5.6q-1.7.35-3.175 1.2-1.475.85-2.625 2.1L10 13.6l-2 3.6 4.7 3.45q-.2.85-.325 1.675-.125.825-.125 1.675 0 .85.125 1.675.125.825.325 1.675L8 30.8l2 3.6 5.3-2.3q1.2 1.2 2.675 2.05Q19.45 35 21.1 35.4Z" />
    </symbol>
    <symbol id="cinema-light" viewbox="0 0 24 24">
      <path
        d="M21 7v10H3V7h18m1-1H2v12h20V6zM11.5 2v3h1V2h-1zm1 17h-1v3h1v-3zM3.79 3 6 5.21l.71-.71L4.5 2.29 3.79 3zm2.92 16.5L6 18.79 3.79 21l.71.71 2.21-2.21zM19.5 2.29 17.29 4.5l.71.71L20.21 3l-.71-.71zm0 19.42.71-.71L18 18.79l-.71.71 2.21 2.21z" />
    </symbol>
    <symbol id="cinema-tall-icon-fill" viewbox="0 0 24 24">
      <path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" />
    </symbol>
    <symbol id="cinema-wide-icon-fill" viewbox="0 0 24 24">
      <path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" />
    </symbol>
    <symbol id="fullscreen-open-icon-fill" viewbox="0 0 24 24">
      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
    </symbol>
    <symbol id="fullscreen-close-icon-fill" viewbox="0 0 24 24">
      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
    </symbol>
    <symbol id="chevron-left-icon" viewbox="0 0 24 24">
      <path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z" />
    </symbol>
    <symbol id="chevron-right-icon" viewbox="0 0 48 48">
      <path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z" />
    </symbol>
    <symbol id="tune-icon" viewbox="0 0 48 48">
      <path
        d="M21.35 42V30.75h3v4.15H42v3H24.35V42ZM6 37.9v-3h12.35v3Zm9.35-8.3v-4.1H6v-3h9.35v-4.2h3v11.3Zm6-4.1v-3H42v3Zm8.3-8.25V6h3v4.1H42v3h-9.35v4.15ZM6 13.1v-3h20.65v3Z" />
    </symbol>
    <symbol id="info-fill" viewbox="0 0 48 48">
      <path
        d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
    </symbol>
    <symbol id="caption-icon" viewbox="0 0 48 48">
      <path
        d="M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z" />
    </symbol>
    <symbol id="repeat-one" viewbox="0 0 48 48">
      <path
        d="m14 44-8-8 8-8 2.1 2.2-4.3 4.3H35v-8h3v11H11.8l4.3 4.3Zm9.3-14.1v-9.45h-2.8V18h5.25v11.9ZM10 21.5v-11h26.2l-4.3-4.3L34 4l8 8-8 8-2.1-2.2 4.3-4.3H13v8Z" />
    </symbol>
    <symbol id="repeat-one-on" viewbox="0 0 48 48">
      <path
        d="M5 46q-1.2 0-2.1-.9Q2 44.2 2 43V5q0-1.2.9-2.1Q3.8 2 5 2h38q1.2 0 2.1.9.9.9.9 2.1v38q0 1.2-.9 2.1-.9.9-2.1.9Zm9-2 2.1-2.2-4.3-4.3H38v-11h-3v8H11.8l4.3-4.3L14 28l-8 8Zm9.3-14.1h2.45V18H20.5v2.45h2.8ZM10 21.5h3v-8h23.2l-4.3 4.3L34 20l8-8-8-8-2.1 2.2 4.3 4.3H10Z" />
    </symbol>
    <symbol id="playback-speed" viewbox="0 0 48 48">
      <path
        d="M8.3 36.3q-1.9-2.25-2.975-5.025Q4.25 28.5 4.05 25.5h3.1q.25 2.35 1.1 4.55.85 2.2 2.35 4ZM4.05 21.5q.1-3 1.225-5.75T8.3 10.7l2.3 2.25Q9.15 14.85 8.275 17 7.4 19.15 7.15 21.5Zm18 22.05q-2.95-.4-5.7-1.4-2.75-1-5.1-2.75l2.3-2.4q1.9 1.3 4.05 2.225t4.45 1.325ZM13.65 10l-2.4-2.4q2.4-1.8 5.175-2.775Q19.2 3.85 22.2 3.45v3q-2.35.4-4.5 1.275Q15.55 8.6 13.65 10Zm5.7 22.05v-17.1l13.4 8.55Zm6.85 11.5v-3q6.4-.95 10.6-5.775Q41 29.95 41 23.5t-4.2-11.275Q32.6 7.4 26.2 6.45v-3q7.7.75 12.75 6.525T44 23.5q0 7.75-5.05 13.5T26.2 43.55Z" />
    </symbol>
  </svg>
    `;
export { player_controls, player_svgs }