document.addEventListener('DOMContentLoaded', function() {
    // Minecraft 서버의 주소와 포트를 설정합니다.
    const serverAddress = '58.228.170.152';
    const serverPort = 25565;

    const checkButton = document.getElementById('checkButton'); // 예시: HTML에서 버튼의 ID를 'checkButton'으로 가정
    // 팝업창
    const wrapper = document.querySelector("#wrapper"),
    toast = wrapper.querySelector("#toast"),
    on_icon = wrapper.querySelector("#icon"),
    title = wrapper.querySelector("span"),
    subTitle = wrapper.querySelector("p");
    close_icon = wrapper.querySelector("#close-icon");

    // Minecraft 서버 상태를 확인하는 함수
    function checkServerStatus() {
        fetch(`https://api.mcsrvstat.us/2/${serverAddress}:${serverPort}`)
            .then(response => response.json())
            .then(data => {
                const statusElement = document.getElementById('wrapper');
                title.style.fontFamily='hangle_dot';
                subTitle.style.fontFamily='hangle_dot';
                if (data.online) {
                    toast.classList.add("online");
                    toast.classList.remove("offline");
                    wrapper.classList.remove("hide");
                    title.innerText = "Server Online";
                    subTitle.innerText = "어서 날래날래 접속하라우!";
                    on_icon.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
                    toast.style.borderLeft = "5px solid #2ecc71";

                    close_icon.onclick = ()=>{
                        wrapper.classList.add("hide");
                    }

                    setTimeout(() => {
                        wrapper.classList.add("hide");
                    }, 5000);
                } else {
                    toast.classList.add("offline");
                    toast.classList.remove("online");
                    wrapper.classList.remove("hide");
                    title.innerText = "Server Offline";
                    subTitle.innerText = "서버 문의 : 010-8969-3821 오정민";
                    on_icon.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
                    toast.style.borderLeft = "5px solid #e74c3c";

                    close_icon.onclick = ()=>{
                        wrapper.classList.add("hide");
                    }

                    setTimeout(() => {
                        wrapper.classList.add("hide");
                    }, 5000);
                }
            })
            .catch(error => {
                console.error('서버 상태를 가져오는 중 오류가 발생했습니다.', error);
            });
    }

    checkServerStatus(); // 페이지 접속 할 떄 1회성 확인 
    // 정기적으로 서버 상태를 확인합니다.
    // setInterval(checkServerStatus, 5000); // 5초마다 확인합니다. 필요에 따라 변경하세요. (1000 = 1s)

    checkButton.addEventListener('click', function() {
        checkServerStatus(); // 서버 상태 확인 함수 호출
    });
});
