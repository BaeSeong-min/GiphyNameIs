const cursorInfo = document.createElement('div');
cursorInfo.style.position = 'fixed';
cursorInfo.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
cursorInfo.style.color = 'white';
cursorInfo.style.padding = '5px';
cursorInfo.style.borderRadius = '5px';
cursorInfo.style.pointerEvents = 'none';
cursorInfo.style.display = 'none'; // 기본적으로 숨김
document.body.appendChild(cursorInfo);

//require('dotenv').config();
//console.log('ccccccccccccccccccccc');
//console.log(apiKey);
// const apiKey = process.env.GIPHY_API_KEY;

const apiKey = 'DVgXQ9PUpNOvNj0izZFwWfRymP9DQttS';

const giphyCache = {};

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const elementUnderCursor = document.elementFromPoint(x, y);

    cursorInfo.style.left = `${x + 15}px`;
    cursorInfo.style.top = `${y + 15}px`;

    if (elementUnderCursor && elementUnderCursor.tagName === "IMG") {
        const imageSrc = elementUnderCursor.src;

        let giphyID = extractGiphyId(imageSrc);

        if (giphyID) {
            //cursorInfo.textContent = `Mouse is over an image: ${giphyID}`;
            if (!giphyCache[giphyID]) { // 캐시에 데이터가 없는 경우에만 API 요청
                let giphyName = getGiphyName(giphyID);

                if(giphyName) { // API 요청
                    cursorInfo.textContent = `${giphyName}`;
                    cursorInfo.style.display = 'block'; // div 보이기
                }
                /*
                else {
                    cursorInfo.textContent = '`${giphyName} GiphyID는 잘 받았는데 api로 못 가져옴';
                }*/
            }
            else {
                cursorInfo.textContent = `${giphyCache[giphyID]}`
                cursorInfo.style.display = 'block'; // div 보이기
            }
        }
        else {
            console.log("얘는 이미진데 GIPHY 아님.");
            cursorInfo.style.display = 'none'; // GIPHY가 아니면 숨김
        }
    }
    else {
        cursorInfo.style.display = 'none'; // 이미지가 아니면 숨김
    }
});

function extractGiphyId(externalUrl) {
    const urlParam = new URLSearchParams(new URL(externalUrl).search).get('url');
    if (!urlParam) return null;

    const decodedUrl = decodeURIComponent(urlParam);
    const regex = /media\/(?:v1\.[^/]+\/)?([a-zA-Z0-9]+)/;
    const match = decodedUrl.match(regex);
    return match ? match[1] : null;
}

function getGiphyName(giphyID) {
    fetch(`https://api.giphy.com/v1/gifs/${giphyID}?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // JSON 데이터에서 GIF 이름과 제목 가져오기
    const giphyName = data.data.title; // GIF의 이름
    giphyCache[giphyID] = giphyName; // 캐시 저장
    return giphyName;
  })
  .catch(error => {
    console.error('Error fetching Giphy data:', error);
    return null;
  });
}