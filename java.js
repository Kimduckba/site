document.getElementById('clickButton').addEventListener('click', function() {
  var code = document.querySelector('.pycode').innerHTML;
  // code = code.trim();  // 앞뒤 공백 제거
  code = code.replace(/^\s+/gm, '');  // 각 줄의 앞쪽 공백을 제거
  // <br> 태그를 실제 줄바꿈 문자로 변환
  // code = code.replace(/<br>/g, '\n');  // <br>을 줄바꿈 문자로 바꿈

  // <span>&nbsp;</span>을 공백으로 바꿈
  code = code.replace(/<span>&nbsp;<\/span>/g, ' ');  // HTML 엔티티인 &nbsp;를 공백으로 바꿈

  // 클립보드에 코드 복사
  navigator.clipboard.writeText(code).then(function() {
    // 알림 요소 생성
    var alertMessage = document.createElement('div');
    alertMessage.textContent = '코드가 클립보드에 복사되었습니다!';
    alertMessage.style.position = 'fixed';
    alertMessage.style.top = '20px';
    alertMessage.style.left = '50%';
    alertMessage.style.transform = 'translateX(-50%)';
    alertMessage.style.backgroundColor = '#4CAF50';
    alertMessage.style.color = 'white';
    alertMessage.style.padding = '10px 20px';
    alertMessage.style.borderRadius = '5px';
    alertMessage.style.fontSize = '16px';
    alertMessage.style.zIndex = '1000';
    alertMessage.style.opacity = '1';
    alertMessage.style.transition = 'opacity 2.0s';

    // 알림을 body에 추가
    document.body.appendChild(alertMessage);

    // 2초 뒤에 알림 메시지 사라지도록 설정
    setTimeout(function() {
      alertMessage.style.opacity = '0';
    }, 0);  // 바로 투명하게 설정 (페이드 아웃 효과를 주기 위해)
    
    // 2초 뒤에 알림 메시지 삭제
    setTimeout(function() {
      alertMessage.remove();
    }, 2000);  // 2초 후 제거
  }).catch(function(err) {
    alert('복사에 실패했습니다: ' + err);
  });
});
