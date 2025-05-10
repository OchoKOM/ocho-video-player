import generate_thumbnails from "./thumbnail.js";
import { detectDeviceType } from "./devicetype.js";

export const player_controls = `
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
        <input
          type="range"
          min="0"
          max="1"
          step="any"
          value="1"
          class="volume-slider desktop-item"
        />
      </div>
      <div class="duration-container">
        <span class="current-time">0:00</span>
        <span>/</span>
        <span class="total-time">-</span>
      </div>
      <div class="auto-play desktop-item">
        <span>
          <svg fill="currentColor" height="16"><use xlink:href="#pause-icon-fill"></use></svg>
        </span>
      </div>
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
      <button class="pip-btn desktop-item">
        <svg fill="currentColor" height="24">
          <use xlink:href="#pip-icon-fill"></use>
        </svg>
      </button>
      <button class="cinema-btn desktop-item">
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
              <svg viewBox="0 0 24 24" fill="currentColor" height="24">
                <use xlink:href="#cinema-light"></use>
              </svg>
              <span>Eclairage de cinema</span>
              <div class="icon arrow">
                <div class="cl-switch">
                  <input type="checkbox" class="cinema-light-check" />
                  <span></span>
                </div>
              </div>
            </label>
          </li>
          <li class="drop-item" data-drop="quality-drop">
            <svg viewBox="0 0 48 48" fill="currentColor" height="24">
              <use xlink:href="#tune-icon"></use>
            </svg>
            <span>Qualité</span>
            <div class="icon arrow">
              <svg viewBox="0 0 48 48" fill="currentColor">
                <use xlink:href="#chevron-right-icon"></use>
              </svg>
            </div>
          </li>
          <li class="drop-item" data-drop="captions-drop">
            <svg viewBox="0 0 48 48" height="24" fill="currentColor">
              <use xlink:href="#caption-icon"></use>
            </svg>
            <span>Sous-titres</span>
            <div class="icon arrow">
              <svg viewBox="0 0 48 48" fill="currentColor">
                <use xlink:href="#chevron-right-icon"></use>
              </svg>
            </div>
          </li>
          <li class="loop-line">
            <label>
              <svg viewBox="0 0 48 48" height="24" fill="currentColor">
                <use xlink:href="#repeat-one"></use>
              </svg>
              <span>Lecture en boucle</span>
              <div class="icon arrow">
                <div class="cl-switch">
                  <input type="checkbox" class="loop-check" />
                  <span></span>
                </div>
              </div>
            </label>
          </li>
          <li class="drop-item desktop-item" data-drop="speed-drop">
            <svg viewBox="0 0 48 48" fill="currentColor" height="24">
              <use xlink:href="#playback-speed"></use>
            </svg>
            <span>Vitesse de lecture</span>
            <div class="icon arrow">
              <svg viewBox="0 0 48 48" fill="currentColor">
                <use xlink:href="#chevron-right-icon"></use>
              </svg>
            </div>
          </li>
          <li class="drop-item" data-drop="info-user-drop">
            <svg viewBox="0 0 48 48" fill="currentColor" height="24">
              <use xlink:href="#info-fill"></use>
            </svg>
            <span>Apropos de Ochokom</span>
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
          <ul></ul>
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
            <span>
              <svg
                viewBox="0 0 24 24"
                height="24"
                fill="currentColor"
                class="back-icon"
              >
                <use xlink:href="#chevron-left-icon"></use>
              </svg>
            </span>
            <span>A propos de Ochokom</span>
          </div>
          <div class="info-drop">
            <div class="channel-profile">
              <img
                src="https://ochokom.github.io/videos-ocho/logo.webp"
                alt="profile"
              />
            </div>
            <p>Martin Ocho</p>
            <div class="user-btns">
              <a
                href="https://youtube.com/@ochokom"
                target="_blank"
                rel="noopener noreferrer"
                ><button class="user-btn youtube">
                  <div class="icon">
                    <svg
                      fill="#fffcfd"
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                    >
                      <title>youtube</title>
                      <path
                        d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"
                      />
                    </svg>
                  </div>
                  <span class="text">Youtube</span>
                </button></a
              >
              <a
                href="https://github.com/OchoKOM/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="user-btn github">
                  <div class="icon">
                    <svg width="24" height="24" viewBox="0 0 96 96">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <span class="text">GitHub</span>
                </button></a
              >
            </div>
            <div class="user-btns">
              <a
                href="https://facebook.com/ochokom"
                target="_blank"
                rel="noopener noreferrer"
                ><button class="user-btn facebook">
                  <div class="icon">
                    <svg width="24" height="24" viewBox="0 0 50 50">
                      <path
                        fill="#fff"
                        d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                      ></path>
                    </svg>
                  </div>
                  <span class="text">Facebook</span>
                </button></a
              >
              <a
                href="https://ochokom.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                ><button class="user-btn portfolio">
                  <div class="icon">
                    <svg
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="#06acfb"
                    >
                      <path
                        d="M240.92-268.31q51-37.84 111.12-59.77Q412.15-350 480-350t127.96 21.92q60.12 21.93 111.12 59.77 37.3-41 59.11-94.92Q800-417.15 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 62.85 21.81 116.77 21.81 53.92 59.11 94.92ZM480-450q-54.77 0-92.38-37.62Q350-525.23 350-580q0-54.77 37.62-92.38Q425.23-710 480-710q54.77 0 92.38 37.62Q610-634.77 610-580q0 54.77-37.62 92.38Q534.77-450 480-450Zm0 350q-79.15 0-148.5-29.77t-120.65-81.08q-51.31-51.3-81.08-120.65Q100-400.85 100-480t29.77-148.5q29.77-69.35 81.08-120.65 51.3-51.31 120.65-81.08Q400.85-860 480-860t148.5 29.77q69.35 29.77 120.65 81.08 51.31 51.3 81.08 120.65Q860-559.15 860-480t-29.77 148.5q-29.77 69.35-81.08 120.65-51.3 51.31-120.65 81.08Q559.15-100 480-100Z"
                      />
                    </svg>
                  </div>
                  <span class="text">Portfolio</span>
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

export const mobile_player_controls = `
  <div class="light"></div>
    <svg class="loader" viewBox="25 25 50 50" stroke-width="5">
      <circle cx="50" cy="50" r="20"></circle>
    </svg>
    <p class="caption-text">
      <mark></mark>
    </p>
    <div class="overlay"></div>
    <div class="video-controls-container">
      <div class="overlay"></div>
      <div class="controls top">
        <div class="volume-container">
          <button class="mute-btn" title="Son (m)">
            <svg fill="currentColor" height="30">
              <use xlink:href="#volume-high-icon"></use>
            </svg>
          </button>
      </div>
      <div class="auto-play" title="Lecture automatique">
        <span>
          <svg fill="currentColor" height="16"><use xlink:href="#pause-icon-fill"></use></svg>
        </span>
      </div>
        <button class="caption-btn" title="Sous-titres">
          <svg fill="currentColor" height="30">
            <use xlink:href="#closed-caption-icon"></use>
          </svg>
        </button>
        <button class="settings-btn" title="Sous-titres">
          <svg fill="currentColor" height="30">
            <use xlink:href="#cog-icon"></use>
          </svg>
        </button>
        <button class="close-controls-btn" title="Fermer">
          <svg fill="currentColor" height="24"> 
            <use xlink:href="#times-icon"></use>
          </svg>
        </button>
      </div>
      <div class="controls center">
        <button class="prev-btn" title="Précédent">
          <svg fill="currentColor" height="30">
            <use xlink:href="#prev-icon"></use>
          </svg>
        </button>
        <button class="play-pause-btn" title="Lecture (k)">
          <svg fill="currentColor" height="50">
            <use xlink:href="#play-icon-fill"></use>
          </svg>
        </button>
        <button class="next-btn" title="Suivant">
          <svg fill="currentColor" height="30">
            <use xlink:href="#next-icon"></use>
          </svg>
        </button>
      </div>
      <div class="controls bottom">
          <div class="controls">

              <div class="duration-container">
                  <span class="current-time">0:00</span>
                  <span>/</span>
                  <span class="total-time">-</span>
              </div>
              <div class="volume-container">
                <button class="mute-btn" title="Son (m)">
                  <svg fill="currentColor" height="24">
                    <use xlink:href="#volume-high-icon"></use>
                  </svg>
                </button>
              </div>
              <button class="fullscreen-btn" title="Mode plein écran (f)">
                <svg fill="currentColor" height="24">
                  <use xlink:href="#fullscreen-open-icon-fill"></use>
                </svg>
              </button>
          </div>
          <div class="timeline-container">
            <div class="timeline">
              <div class="preview-thumb" data-time="0:00">
                <div></div>
              </div>
              <div class="thumb-indicator"></div>
              <canvas class="loaded-progress"></canvas>
            </div>
          </div>
      </div>
      <div class="settings-menu">
        <div class="wrapper">
          <ul class="main-section">
            <li class="ambiant-light">
              <label>
                <span>
                  <svg viewBox="0 0 24 24" fill="currentColor" height="30">
                    <use xlink:href="#cinema-light"></use>
                  </svg>
                </span>
                <span>Eclairage de cinema</span>
                <div class="icon arrow">
                  <div class="cl-switch">
                    <input type="checkbox" class="cinema-light-check" />
                    <span></span>
                  </div>
                </div>
              </label>
            </li>
            <li class="drop-item" data-drop="quality-drop">
              <span>
                <svg viewBox="0 0 48 48" fill="currentColor" height="30">
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
                <svg viewBox="0 0 48 48" height="30" fill="currentColor">
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
                  <svg viewBox="0 0 48 48" height="30" fill="currentColor">
                    <use xlink:href="#repeat-one"></use>
                  </svg>
                </span>
                <span>Lecture en boucle</span>
                <div class="icon arrow">
                  <div class="cl-switch">
                    <input type="checkbox" class="loop-check" />
                    <span></span>
                  </div>
                </div>
              </label>
            </li>
            <li class="drop-item" data-drop="speed-drop">
              <span>
                <svg viewBox="0 0 48 48" fill="currentColor" height="30">
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
                <svg viewBox="0 0 48 48" fill="currentColor" height="30">
                  <use xlink:href="#info-fill"></use>
                </svg>
              </span>
              <span>A propos de OchoKOM</span>
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
                <svg viewBox="0 0 24 24" height="30" fill="currentColor">
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
                <svg viewBox="0 0 24 24" height="30" fill="currentColor">
                  <use xlink:href="#chevron-left-icon"></use>
                </svg>
              </span>
              <span>Sous-titre</span>
            </div>
            <ul></ul>
          </div>
          <div class="drop speed-drop">
            <div class="label">
              <span class="back-icon">
                <svg viewBox="0 0 24 24" height="30" fill="currentColor">
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
              <span>
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  fill="currentColor"
                  class="back-icon"
                >
                  <use xlink:href="#chevron-left-icon"></use>
                </svg>
              </span>
              <span>A propos de Ochokom</span>
            </div>
            <div class="info-drop">
              <div class="channel-profile">
                <img
                  src="https://ochokom.github.io/videos-ocho/logo.webp"
                  alt="profile"
                />
              </div>
              <p>Martin Ocho</p>
              <div class="user-btns">
                <a
                  href="https://youtube.com/@ochokom"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><button class="user-btn youtube">
                    <div class="icon">
                      <svg
                        fill="#fffcfd"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                      >
                        <title>youtube</title>
                        <path
                          d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"
                        />
                      </svg>
                    </div>
                    <span class="text">Youtube</span>
                  </button></a
                >
                <a
                  href="https://github.com/OchoKOM/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="user-btn github">
                    <div class="icon">
                      <svg width="24" height="24" viewBox="0 0 96 96">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <span class="text">GitHub</span>
                  </button></a
                >
              </div>
              <div class="user-btns">
                <a
                  href="https://facebook.com/ochokom"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><button class="user-btn facebook">
                    <div class="icon">
                      <svg width="24" height="24" viewBox="0 0 50 50">
                        <path
                          fill="#fff"
                          d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                        ></path>
                      </svg>
                    </div>
                    <span class="text">Facebook</span>
                  </button></a
                >
                <a
                  href="https://ochokom.github.io/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><button class="user-btn portfolio">
                    <div class="icon">
                      <svg
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                        fill="#06acfb"
                      >
                        <path
                          d="M240.92-268.31q51-37.84 111.12-59.77Q412.15-350 480-350t127.96 21.92q60.12 21.93 111.12 59.77 37.3-41 59.11-94.92Q800-417.15 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 62.85 21.81 116.77 21.81 53.92 59.11 94.92ZM480-450q-54.77 0-92.38-37.62Q350-525.23 350-580q0-54.77 37.62-92.38Q425.23-710 480-710q54.77 0 92.38 37.62Q610-634.77 610-580q0 54.77-37.62 92.38Q534.77-450 480-450Zm0 350q-79.15 0-148.5-29.77t-120.65-81.08q-51.31-51.3-81.08-120.65Q100-400.85 100-480t29.77-148.5q29.77-69.35 81.08-120.65 51.3-51.31 120.65-81.08Q400.85-860 480-860t148.5 29.77q69.35 29.77 120.65 81.08 51.31 51.3 81.08 120.65Q860-559.15 860-480t-29.77 148.5q-29.77 69.35-81.08 120.65-51.3 51.31-120.65 81.08Q559.15-100 480-100Z"
                        />
                      </svg>
                    </div>
                    <span class="text">Portfolio</span>
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
export const player_svgs = `
    <svg style="display: none;">
    <symbol id="caption-icon" viewbox="0 0 48 48">
      <path
        d="M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z" />
    </symbol>
    <symbol id="times-icon" viewbox="0 0 48 48">
      <path
        d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
    </symbol>
    <symbol id="closed-caption-icon" viewbox="0 0 48 48">
      <path
        d="M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z" />
    </symbol>
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

class OchoPlayer extends HTMLElement {
  constructor() {
    super();
    this.style.display = "block";
    this.attachShadow({ mode: "open" }); // Utiliser le Shadow DOM pour encapsuler le style et le HTML
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const player = this.shadowRoot;
    const src = this.getAttribute("src") ? this.getAttribute("src") : "";
    const deviceType = detectDeviceType();
    const isMobile =
      !this.hasAttribute("mobile-disabled") &&
      (this.hasAttribute("mobile") ||
        deviceType === "mobile" ||
        deviceType === "tablet");

    const container = document.createElement("div");
    const ocho_player = this;
    container.classList.add("ocho-player-container");
    const video = document.createElement("video");
    this.classList.add("player");
    video.classList.add("main-video");
    const ocho_size = this.getAttribute("size") ? this.getAttribute("size") : 0;
    this.getAttribute("autoplay")
      ? video.setAttribute("autoplay", true)
      : video.removeAttribute("autoplay");
    video.setAttribute("size", ocho_size);
    video.src = this.getAttribute("src") ? this.getAttribute("src") : "";
    video.poster = this.getAttribute("poster")
      ? this.getAttribute("poster")
      : "";
    const sources = this.querySelectorAll("source");
    const tracks = this.querySelectorAll("track");
    this.innerHTML = "";
    sources.forEach((source) => {
      video.appendChild(source);
    });
    tracks.forEach((track) => {
      video.appendChild(track);
    });
    const stylesheet = isMobile ? "mobile-player.css" : "player.css";
    console.log(location.pathname);
    const style_src =
      (location.hostname !== "ochokom.github.io" && location.pathname !== "/ocho-video-player/")
        ? `https://ochokom.github.io/ocho-video-player/${stylesheet}`
        : `./${stylesheet}`;
    player.appendChild(container);

    // Ajouter le tout au Shadow DOM
    container.innerHTML = `
          <link rel="stylesheet" href="${style_src}">
          ${isMobile ? mobile_player_controls : player_controls}
          ${player_svgs}
        `;
    if (src.startsWith("https://www.youtube.com/watch?v=")) {
      const youtube_embed = src.replace(
        "https://www.youtube.com/watch?v=",
        "https://www.youtube.com/embed/"
      );
      const youtube_player = `
          <iframe style="width: 100%; aspect-ratio: 16/9;" src="${youtube_embed}" title="video placeholder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
      `;
      this.classList.add("youtube-player");
      container.innerHTML = youtube_player;
      container.style = `aspect-ratio: 16/9;
  max-height: 80vh;`;
      player.appendChild(container);
      return;
    }
    container.appendChild(video);

    const loader_spinner = player.querySelector(".loader"),
      timeline = player.querySelector(".timeline"),
      loaded_progress = player.querySelector(".loaded-progress"),
      play_pause_btn = player.querySelector(".play-pause-btn"),
      mute_btns = player.querySelectorAll(".mute-btn"),
      volume_slider = player.querySelector(".volume-slider"),
      preview_thumb_el = player.querySelector(".preview-thumb"),
      preview_thumbnails = generate_thumbnails(video.src),
      current_time_el = player.querySelector(".current-time"),
      total_time_el = player.querySelector(".total-time"),
      auto_play = player.querySelector(".auto-play"),
      subtitle_btn = player.querySelector(".caption-btn"),
      subtitle_ul = player.querySelector(".captions-drop ul"),
      settings_btn = player.querySelector(".settings-btn"),
      settings_menu = player.querySelector(".settings-menu"),
      main_menus_ = settings_menu.querySelectorAll(".main-section .drop-item"),
      cinema_light_check = player.querySelector(".cinema-light-check"),
      loop_mode_check = player.querySelector(".loop-check"),
      menus = settings_menu.querySelectorAll(".drop"),
      back_btns = settings_menu.querySelectorAll(".drop .back-icon"),
      quality_ul = settings_menu.querySelector(".quality-drop ul"),
      playbacks = settings_menu.querySelectorAll(".speed-drop li"),
      pip_btn = player.querySelector(".pip-btn"),
      cinema_btn = player.querySelector(".cinema-btn"),
      fullscreen_btn = player.querySelector(".fullscreen-btn"),
      play_pause_icon = play_pause_btn.querySelector("svg");

    document.addEventListener("keydown", (e) => {
      const tag_name = document.activeElement.tagName.toLocaleLowerCase();
      if (tag_name === "input") return;
      switch (e.key.toLocaleLowerCase()) {
        case " ":
          if (tag_name === "button") return;
        case "k":
          toggle_play();
          break;
        case "m":
          toggle_mute();
          break;
        case "arrowleft":
        case "j":
          skip(-5);
          break;
        case "arrowright":
        case "l":
          skip(5);
          break;
        case "i":
          toggle_pip();
          break;
        case "t":
          toggle_cinema_mode();
          break;
        case "f":
          toggle_fullscreen_mode();
          break;
      }
    });

    // ? Touch events
    function touch_screen_controls() {
      const overlays = container.querySelectorAll(".overlay");
      const close_controls = container.querySelectorAll(".close-controls-btn");
      overlays.forEach((overlay) => {
        overlay.addEventListener("click", () => {
          container.classList.toggle("control");
          settings_btn.classList.contains("active") && remove_settings();
        });
      });
      close_controls.forEach((close_control) => {
        close_control.addEventListener("click", () => {
          container.classList.toggle("control");
          settings_btn.classList.contains("active") && remove_settings();
        });
      });
      toggle_mute();
      // Vérifier si l'API Orientation Events est prise en charge par le navigateur
      if ("onorientationchange" in window) {
        // Ajouter un écouteur d'événement pour détecter les changements d'orientation
        screen.orientation.addEventListener("change", (e) => {
          if (e.srcElement.type.startsWith("landscape")) {
            if (
              document.fullscreenElement === null &&
              document.querySelectorAll("ocho-player").length === 1
            ) {
              toggle_fullscreen_mode();
              screen.orientation.addEventListener("change", (e) => {
                if (e.srcElement.type.startsWith("portrait")) {
                  if (document.fullscreenElement !== null) {
                    toggle_fullscreen_mode();
                  }
                }
              });
            }
          }
          container.addEventListener("fullscreenchange", () => {
            if ("orientation" in screen && "lock" in screen.orientation) {
              // L'appareil prend en charge le changement de l'orientation verrouillée
              if (document.fullscreenElement !== null) {
                screen.orientation.lock("landscape");
              } else {
                screen.orientation.lock("portrait");
                screen.orientation.unlock();
              }
            } else {
              // L'appareil ne prend pas en charge le changement de l'orientation verrouillée
              console.log(
                "L'appareil ne prend pas en charge le changement de l'orientation verrouillée."
              );
            }
          });
        });
      } else {
        console.log(
          "L'appareil ne prend pas en charge l'API Orientation Events."
        );
      }
    }
    isMobile && touch_screen_controls();

    //! Play/pause
    const play_pause_svg = {
      play: '<use xlink:href="#play-icon-fill"></use>',
      pause: '<use xlink:href="#pause-icon-fill"></use>',
    };
    function toggle_play() {
      video.paused ? play_video() : pause_video();
      settings_btn.classList.contains("active") && remove_settings();
    }

    function play_video() {
      container.classList.remove("paused");
      // Change the play icon xlink:href
      play_pause_icon.innerHTML = play_pause_svg.pause;
      // Change the play icon title
      play_pause_icon.title = video.paused ? "Lire(k)" : "Pause(k)";
      // Change the video state
      video.play();
      loader_spinner.classList.add("active");
    }
    loader_spinner.classList.add("active");

    // Fonction pause
    function pause_video() {
      container.classList.add("paused");
      // Change the play icon xlink:href
      play_pause_icon.innerHTML = play_pause_svg.play;
      // Change the play icon title
      play_pause_icon.title = video.paused ? "Lire(k)" : "Pause(k)";
      // Change the video state
      video.pause();
    }

    video.addEventListener("click", toggle_play);
    play_pause_btn.addEventListener("click", toggle_play);
    video.addEventListener("play", play_video);
    video.addEventListener("pause", pause_video);

    // ! Volume
    mute_btns.forEach((mute_btn) => {
      mute_btn.addEventListener("click", toggle_mute);
    });
    function toggle_mute() {
      if (video.volume !== 0) {
        localStorage.setItem("volume", video.volume);
        video.volume = 0;
      } else {
        let stored_volume = parseFloat(localStorage.getItem("volume")) || 1;
        video.volume = isFinite(stored_volume) ? stored_volume : 1;
      }
      settings_btn.classList.contains("active") && remove_settings();
    }
    video.addEventListener("volumechange", volume_change);
    volume_slider &&
      volume_slider.addEventListener("change", () => {
        volume_slide(volume_slider.value);
      });
    volume_slider &&
      volume_slider.addEventListener("mousemove", () => {
        volume_slide(volume_slider.value);
      });
    function volume_change() {
      let volume_svg = [
        '<use xlink:href="#volume-muted-icon"></use>',
        '<use xlink:href="#volume-low-icon"></use>',
        '<use xlink:href="#volume-high-icon"></use>',
      ];

      volume_slider && (volume_slider.value = video.volume);
      let video_volume = video.volume;
      // Détermine le niveau sonore en fonction des conditions
      video_volume = video_volume > 0.5 ? 2 : video_volume !== 0 ? 1 : 0;
      // Mettre à jour l'icône du bouton de sourdine en fonction du niveau sonore
      mute_btns.forEach((mute_btn) => {
        mute_btn.querySelector("svg").innerHTML = volume_svg[video_volume];
      });
    }

    function volume_slide(level) {
      video.volume = level;
    }

    // ! Duration
    video.addEventListener("waiting", () => {
      loader_spinner.classList.remove("active");
      video.addEventListener("canplay", () => {
        loader_spinner.classList.add("active");
      });
    });
    video.addEventListener("canplaythrough", () => {
      loader_spinner.classList.add("active");
    });
    video.addEventListener("loadeddata", () => {
      total_time_el.textContent = format_duration(video.duration);
    });
    video.onloadeddata = () => {
      total_time_el.textContent = format_duration(video.duration);
    };
    video.addEventListener("timeupdate", ambiant_light);
    video.addEventListener("timeupdate", () => {
      current_time_el.textContent = format_duration(video.currentTime);
      total_time_el.textContent = format_duration(video.duration);
      let progress_position = video.currentTime / video.duration || 0;
      timeline.style.setProperty("--progress-position", progress_position);
    });
    setInterval(() => {
      draw_progress(loaded_progress, video.buffered, video.duration);
    }, 1000);
    timeline.addEventListener("pointermove", (e) => {
      total_time_el.textContent = format_duration(video.duration);
      let preview_position = e.layerX / timeline.clientWidth || 1;
      preview_position <= 0 && (preview_position = 0);
      preview_thumb_el.setAttribute(
        "data-time",
        format_duration(video.duration * preview_position)
      );
      if (e.offsetX > timeline.clientWidth - 80) {
        timeline.style.setProperty("--overflow-pos", "-80px");
        timeline.style.setProperty("--preview-position", 1);
      } else if (e.offsetX < 80) {
        timeline.style.setProperty("--preview-position", 0);
        timeline.style.setProperty("--overflow-pos", "80px");
      } else {
        timeline.style.setProperty("--overflow-pos", "0px");
        timeline.style.setProperty("--preview-position", preview_position);
      }
      timeline.style.setProperty("--preview-hover-position", preview_position);
      preview_thumbnails.then(async (thumbnails) => {
        thumbnails.forEach(async (thumbnail) => {
          if (await thumbnail.data) {
            let seconds = thumbnail.sec;
            seconds.forEach((sec) => {
              if (
                sec["index"] === Math.floor(video.duration * preview_position)
              ) {
                preview_thumb_el.style.setProperty(
                  "--thumbnail-bg",
                  `url(${thumbnail.data})`
                );
                preview_thumb_el.style.setProperty(
                  "--thumblail-pos-x",
                  `${sec.backgroundPositionX}px`
                );
                preview_thumb_el.style.setProperty(
                  "--thumblail-pos-y",
                  `${sec.backgroundPositionY}px`
                );
              }
            });
          }
        });
      });
    });
    timeline.addEventListener("pointerdown", () => {
      timeline.addEventListener("click", skip_time);
      timeline.addEventListener("pointermove", skip_time);
      document.addEventListener("pointerup", () => {
        timeline.removeEventListener("pointermove", skip_time);
      });
    });
    function skip_time(e) {
      if (e.target !== timeline) {
        return;
      }
      let time_percent = e.offsetX / timeline.clientWidth;
      timeline.style.setProperty("--progress-position", time_percent);
      video.currentTime = video.duration * time_percent;
      settings_btn.classList.contains("active") && remove_settings();
    }

    const leading_zero_formatter = new Intl.NumberFormat(undefined, {
      minimumIntegerDigits: 2,
    });
    function format_duration(time) {
      time = isNaN(time) ? 0 : time;
      const seconds = Math.floor(time % 60);
      const minutes = Math.floor(time / 60) % 60;
      const hours = Math.floor(time / 3600);
      let formated = `${hours}:${leading_zero_formatter.format(
        minutes
      )}:${leading_zero_formatter.format(seconds)}`;
      if (hours === 0) {
        formated = `${minutes}:${leading_zero_formatter.format(seconds)}`;
      }
      return formated;
    }
    function skip(time) {
      video.currentTime += time;
    }
    video.addEventListener("progress", () => {
      draw_progress(loaded_progress, video.buffered, video.duration);
    });
    video.onprogress = () => {
      draw_progress(loaded_progress, video.buffered, video.duration);
    };
    function draw_progress(canvas, buffered, duration) {
      // Récupère le contexte du canvas
      let context = canvas.getContext("2d", { antialias: false });
      // Définit la couleur de remplissage du rectangle
      context.fillStyle = "#ffffff66";

      // Récupère la hauteur et la largeur du canvas
      let height = canvas.height;
      let width = canvas.width;
      // Vérifie que la hauteur et la largeur sont définies
      if (!height || !width)
        throw "La largeur ou la hauteur du canvas n'est pas définie.";
      // Efface le contenu précédent du canvas
      context.clearRect(0, 0, width, height);

      // Parcourt les différentes plages tamponnées de la vidéo
      for (let i = 0; i < buffered.length; i++) {
        // Calcule la position de début et de fin de chaque plage tamponnée en fonction de la durée totale de la vidéo et de la largeur du canvas
        let leadingEdge = (buffered.start(i) / duration) * width;
        let trailingEdge = (buffered.end(i) / duration) * width;
        // Dessine un rectangle rempli pour chaque plage tamponnée
        context.fillRect(leadingEdge, 0, trailingEdge - leadingEdge, height);
      }
    }

    // ! autoplay
    function auto_play_get() {
      const saved_autoplay = sessionStorage.getItem("auto-play");
      video.autoplay = !!saved_autoplay;
      video.autoplay
        ? auto_play.classList.add("active")
        : auto_play.classList.remove("active");
      change_autoplay_btn(video.autoplay);
    }
    function change_autoplay_btn(state = false) {
      auto_play.querySelector("svg").innerHTML = state
        ? play_pause_svg.play
        : play_pause_svg.pause;
    }
    auto_play_get();
    auto_play.addEventListener("click", toggle_autoplay);
    function toggle_autoplay() {
      auto_play.classList.toggle("active");
      video.autoplay = auto_play.classList.contains("active");
      change_autoplay_btn(video.autoplay);
      save_autoplay();
      settings_btn.classList.contains("active") && remove_settings();
    }
    function save_autoplay() {
      // Sauvearder les preferences de lecture automatique ici
      auto_play.classList.contains("active")
        ? sessionStorage.setItem("auto-play", true)
        : sessionStorage.removeItem("auto-play");
    }

    //! View modes
    cinema_btn && cinema_btn.addEventListener("click", toggle_cinema_mode);
    document.addEventListener("fullscreenchange", change_fullscreen);
    fullscreen_btn.addEventListener("click", toggle_fullscreen_mode);
    pip_btn && pip_btn.addEventListener("click", toggle_pip);

    function toggle_cinema_mode() {
      const cinema_svg = {
        on: '<use xlink:href="#cinema-wide-icon-fill"></use>',
        off: '<use xlink:href="#cinema-tall-icon-fill"></use>',
      };
      ocho_player.classList.toggle("cinema");
      cinema_btn.querySelector("svg").innerHTML =
        ocho_player.classList.contains("cinema")
          ? cinema_svg["on"]
          : cinema_svg["off"];
      settings_btn.classList.contains("active") && remove_settings();
    }
    function toggle_fullscreen_mode() {
      document.fullscreenElement === null
        ? container.requestFullscreen()
        : document.exitFullscreen();
      settings_btn.classList.contains("active") && remove_settings();
      settings_btn.classList.contains("active") && remove_settings();
    }
    function change_fullscreen() {
      const fullscreen_svg = {
        on: '<use xlink:href="#fullscreen-close-icon-fill"></use>',
        off: '<use xlink:href="#fullscreen-open-icon-fill"></use>',
      };
      container.classList.toggle("fullscreen");
      fullscreen_btn.querySelector("svg").innerHTML =
        container.classList.contains("fullscreen")
          ? fullscreen_svg["on"]
          : fullscreen_svg["off"];
    }
    function toggle_pip() {
      if (document.fullscreenElement !== null) {
        document.exitFullscreen();
      }
      document.pictureInPictureElement === null
        ? video.requestPictureInPicture()
        : document.exitPictureInPicture();
      settings_btn.classList.contains("active") && remove_settings();
    }
    // ! Settings
    // activer la section des parametres
    settings_btn.addEventListener("click", toggle_settings);
    window.addEventListener("blur", remove_settings);
    function toggle_settings() {
      settings_btn.classList.toggle("active");
      settings_menu.classList.toggle("active");
      settings_menu.classList.contains("active")
        ? settings_void()
        : remove_settings();
    }
    // Fonction pour enlever les parametres
    function remove_settings() {
      remove_active_class(settings_btn);
      remove_active_class(settings_menu);
      remove_active_classes(menus);
    }

    function settings_void() {
      let check_cinema = sessionStorage.getItem("cinema-light");
      cinema_light_check.checked = Boolean(Number(check_cinema));
      cinema_light_check.addEventListener("change", () => {
        cinema_light_check.checked
          ? sessionStorage.setItem("cinema-light", 1)
          : sessionStorage.removeItem("cinema-light");
        if (
          !cinema_light_check.checked &&
          video.parentNode.querySelector(".light")
        ) {
          video.removeEventListener("timeupdate", ambiant_light);
          video.parentNode.querySelector(".light").style.boxShadow = "none";
          video.parentNode.querySelector(".light").remove();
        }
        cinema_light_check.checked &&
          video.addEventListener("timeupdate", ambiant_light);
      });
      loop_mode_check.addEventListener("change", (e) => {
        console.log(e);
        video.loop = Boolean(loop_mode_check.checked);
      });
      main_menus_.forEach((menu) => {
        menu.addEventListener("click", () => {
          const menu_id = "." + menu.getAttribute("data-drop");
          remove_active_classes(menus);
          container.querySelector(menu_id).classList.add("active");
        });
      });
      back_btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          remove_active_classes(menus);
        });
      });

      quality_void();
      playback_speed_void();
    }
    // qualites
    let quality_array = [];

    // Afficher les paramètres de qualité
    const sizes = document.querySelectorAll("[size]");

    // Convertir NodeList en tableau
    const sizesArray = Array.from(sizes);

    // Créer un tableau d'objets avec les données de taille
    const qualityDataArray = sizesArray.map((size) => {
      return {
        data_quality: Number(size.getAttribute("size")),
        source: size.getAttribute("src"),
        current_quality: video.getAttribute("size"),
        active:
          Number(video.getAttribute("size")) ===
          Number(size.getAttribute("size"))
            ? " active"
            : "",
        tagName: size.tagName.toLowerCase(),
      };
    });

    // Trier le tableau d'objets par taille décroissante
    qualityDataArray.sort((a, b) => b.data_quality - a.data_quality);

    // Parcourir le tableau trié et ajouter les éléments à la liste
    qualityDataArray.forEach((data) => {
      if (!quality_array.includes(data.data_quality)) {
        let hd = "";
        if (data.data_quality >= 1018) {
          hd = " HD";
        }
        const size_li = `
           <li data-quality="${data.data_quality}">
               <div class="check${data.active}"></div>
               <span>${data.data_quality}p${hd}</span>
           </li>
       `;
        const source_html = `<source src="${data.source}" size="${data.data_quality}">`;

        if (data.tagName === "video") {
          video.innerHTML += source_html;
        }
        quality_ul.innerHTML += size_li;
        quality_array.push(data.data_quality);
      }
    });

    function quality_void() {
      const quality_li = quality_ul.querySelectorAll("li");
      quality_li.forEach((e) => {
        const all_checks = e.parentNode.querySelectorAll(".check");
        e.addEventListener("click", () => {
          remove_active_classes(all_checks);
          e.querySelector(".check").classList.add("active");
          const size = Number(e.getAttribute("data-quality"));
          const sources = video.querySelectorAll("source");
          sources.forEach((source) => {
            if (
              Number(source.getAttribute("size")) === size &&
              Number(video.getAttribute("size")) !== size
            ) {
              let current_time = video.currentTime;
              let temp_video = document.createElement("video");
              temp_video.src = source.src;
              temp_video.currentTime = current_time;
              temp_video.volume = 0;
              temp_video.autoplay = true;
              temp_video.addEventListener("canplay", () => {
                video.src = source.src;
                video.currentTime = temp_video.currentTime;
                video.autoplay = true;
                video.setAttribute("size", size);
                temp_video.remove();
              });
            }
          });
        });
      });
    }
    let caption_text = document.querySelector(".caption-text");

    caption_void();
    if (tracks.length > 1) {
      const caption_active = sessionStorage.getItem("caption");
      if (caption_active) {
        let lang = sessionStorage.getItem("lang");
        select_captions(lang);
      }
      subtitle_btn.addEventListener("click", () => {
        let lang = sessionStorage.getItem("lang")
          ? sessionStorage.getItem("lang")
          : document
              .querySelectorAll("[data-track]")[1]
              .getAttribute("data-track");
        !subtitle_btn.classList.contains("active")
          ? select_captions(lang)
          : select_captions("Off");
        settings_btn.classList.contains("active") && remove_settings();
      });
    }
    let text_tracks = video.textTracks;
    for (let i = 0; i < text_tracks.length; i++) {
      const track = text_tracks[i];
      track.addEventListener("cuechange", () => {
        if (track.mode === "showing") {
          let activeCue = track.activeCues[0];
          caption_text.innerHTML = Boolean(activeCue)
            ? `<mark>${activeCue.text}</mark>`
            : "";
        }
      });
    }
    function caption_void() {
      let track_li = `
          <li data-track="Off">
              <div class="check active"></div>
              <span>Desactivé</span>
          </li>
          `;
      if (!tracks.length) {
        track_li = `
              <li data-track="Off">
                  <div class="check active"></div>
                  <span>Non disponible</span>
              </li>
              `;
      }

      // Convertir NodeList en tableau
      const tracksArray = Array.from(tracks);

      // Tri des tracks par srclang
      tracksArray.sort((a, b) => {
        const langA = a.srclang.toUpperCase(); // Convertir en majuscules pour assurer une comparaison insensible à la casse
        const langB = b.srclang.toUpperCase();
        if (langA < langB) {
          return -1;
        }
        if (langA > langB) {
          return 1;
        }
        return 0;
      });

      tracksArray.forEach((track) => {
        track.label = languages[`${track.srclang}`];
        track_li += `
              <li data-track="${track.srclang}">
                  <div class="check"></div>
                  <span>${track.label}</span>
              </li>
              `;
      });

      subtitle_ul.innerHTML = track_li;
      const subtitle_li = subtitle_ul.querySelectorAll("li");
      subtitle_li.forEach((li) => {
        li.addEventListener("click", () => {
          select_captions(li.getAttribute("data-track"));
        });
      });
    }

    function select_captions(lang) {
      let li = document.querySelector(`[data-track=${lang}]`);
      const all_checks = li.parentNode.querySelectorAll(".check");
      remove_active_classes(all_checks);
      li.querySelector(".check").classList.add("active");
      change_caption(li);
    }

    function change_caption(li) {
      let label = li.getAttribute("data-track");
      let text_tracks = video.textTracks;
      for (let i = 0; i < text_tracks.length; i++) {
        let track = text_tracks[i];
        track.mode = "disabled";
        if (track.language === label) {
          track.mode = "showing";
          sessionStorage.setItem("lang", track.language);
          sessionStorage.setItem("caption", track.language);
          subtitle_btn.classList.add("active");
        }
        if (label.toLowerCase() === "off") {
          sessionStorage.removeItem("caption");
          subtitle_btn.classList.remove("active");
          caption_text.innerHTML = "";
        }
      }
    }
    // Vitesse de lecture
    function playback_speed_void() {
      playbacks.forEach((e) => {
        const all_checks = e.parentNode.querySelectorAll(".check");
        e.addEventListener("click", () => {
          remove_active_classes(all_checks);
          e.querySelector(".check").classList.add("active");
          let video_speed = Number(e.getAttribute("data-speed"));
          video.playbackRate = video_speed;
        });
      });
    }
    function remove_active_classes(elements) {
      elements.forEach((element) => {
        remove_active_class(element);
      });
    }
    function remove_active_class(element) {
      element.classList.contains("active") &&
        element.classList.remove("active");
    }
  }
}

// Enregistrer l'élément personnalisé
customElements.define("ocho-player", OchoPlayer);

export function ambiant_light(e) {
  let check_cinema = sessionStorage.getItem("cinema-light");
  let video = e.target;
  if (!check_cinema) {
    return;
  }
  let temp_video = document.createElement("video");
  temp_video.src = video.src;
  temp_video.currentTime = Math.floor(video.currentTime);
  // Créer un élément canvas pour dessiner le fond
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  temp_video.addEventListener("seeked", () => {
    // Définir la taille du canvas selon la taille de l'image
    canvas.width = temp_video.videoWidth;
    canvas.height = temp_video.videoHeight;

    // Dessiner l'image sur le canvas
    ctx.drawImage(temp_video, 0, 0);

    // Obtenir les données des pixels de l'image
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imageData.data;

    // Parcourir les pixels et calculer la moyenne des couleurs
    let r = 0,
      g = 0,
      b = 0,
      n = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      r += pixels[i]; // rouge
      g += pixels[i + 1]; // vert
      b += pixels[i + 2]; // bleu
      n++; // nombre de pixels
    }
    r = Math.round(r / n); // moyenne du rouge
    g = Math.round(g / n); // moyenne du vert
    b = Math.round(b / n); // moyenne du bleu

    // Convertir les valeurs RGB en une chaîne de couleur hexadécimale
    let rgbToHex = function (rgb) {
      let hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    };
    let hex = "#" + rgbToHex(r) + rgbToHex(g) + rgbToHex(b);

    // Créer un élément div pour afficher le fond
    let light =
      video.parentNode.querySelector(".light") || document.createElement("div");
    let height_ratio = temp_video.videoWidth + "/" + temp_video.videoHeight;
    // Définir le style du light selon la couleur moyenne et la luminosité
    light.style.setProperty("--hx", hex);
    light.style.setProperty("--ratio", height_ratio);
    video.style.setProperty("--hx", hex);
    if (light !== video.parentNode.querySelector(".light")) {
      light.classList.add("light");
      video.parentNode.insertBefore(light, video);
    }
  });
}
