document.addEventListener('DOMContentLoaded', function() {
    const serverAddress = '58.228.170.152'; 
    const serverPort = 25565;

    // Minecraft 서버 상태를 확인하는 함수
    function checkServerStatus() {
        fetch(`https://api.mcsrvstat.us/2/${serverAddress}:${serverPort}`)
            .then(response => response.json())
            .then(data => {
                const statusElement = document.getElementById('status');
                statusElement.style.fontFamily='hangle_dot';
                if (data.online) {
                    statusElement.textContent =`${data.players.online}명의 유저가 접속 중 입니다.`;
                    //  / ${data.players.max}
                    statusElement.style.color = '#fff'
                    statusElement.style.display = 'grid';
                    statusElement.style.placeContent = 'center';  
                    statusElement.style.textAlign = 'center';
                    statusElement.style.webkitTextStroke = '1px solid #fff';
                } 
                else {
                    statusElement.textContent = '금일 영업은 종료하였습니다.';
                    statusElement.style.color = '#fff';
                    statusElement.style.display = 'grid';
                    statusElement.style.placeContent = 'center';    
                    statusElement.style.textAlign = 'center';
                    statusElement.style.margin = '-5px 0'  
                }
            })
            .catch(error => {
                console.error('서버 상태를 가져오는 중 오류가 발생했습니다.', error);
            });
    }

    // 정기적 서버 상태 확인
    setInterval(checkServerStatus, 5000);
});
