document.addEventListener('DOMContentLoaded', function() {
    // Minecraft 서버의 주소와 포트를 설정합니다.
    const serverAddress = '218.232.210.31';
    const serverPort = 25565;

    // Minecraft 서버 상태를 확인하는 함수
    function checkServerStatus() {
        fetch(`https://api.mcsrvstat.us/2/${serverAddress}:${serverPort}`)
            .then(response => response.json())
            .then(data => {
                const statusElement = document.getElementById('status'); // 수정된 부분: statusElements -> statusElement
                if (data.online) {
                    statusElement.textContent =`${data.players.online}`;
                    statusElement.style.color = '#FFFFFF';
                    statusElement.style.width = '94.63px';
                    statusElement.style.height = '43px';
                    statusElement.style.margin = '0';
                    statusElement.style.padding = '0';
                    statusElement.style.display = 'grid';
                    statusElement.style.placeContent = 'center';  
                } else {
                    statusElement.textContent = 'Offline';
                    statusElement.style.color = '#E53C20';
                    statusElement.style.width = '94.63px';
                    statusElement.style.height = '43px';
                    statusElement.style.margin = '0';
                    statusElement.style.padding = '0';
                    statusElement.style.display = 'grid';
                    statusElement.style.placeContent = 'center';    
                }
            })
            .catch(error => {
                console.error('서버 상태를 가져오는 중 오류가 발생했습니다.', error);
            });
    }

    // 정기적으로 서버 상태를 확인합니다.
    setInterval(checkServerStatus, 5000); // 5초마다 확인합니다. 필요에 따라 변경하세요.
});
