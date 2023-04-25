var locationBtn = document.getElementById("Location");
  var videoBtn = document.getElementById("Video");
  var placeholder = document.getElementById("placeholder");
  
  locationBtn.addEventListener("click", function() {
    placeholder.value = "I want Live location of the person";
  });
  
  videoBtn.addEventListener("click", function() {
    placeholder.value = "I want Current Video of person";
  });

  
  // create a function that will send the input value
 

const sendButton = document.querySelector('.send-btn');

sendButton.addEventListener('click', () => {
  const inputField = document.querySelector('#placeholder');

  if (inputField.value === 'I want Current Video of person') {
    // Display user message in chat box
    const chatBox = document.querySelector('.chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = inputField.value;
    chatBox.appendChild(messageDiv);

    // Display bot message in chat box
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('message', 'bot-message');
    botMessageDiv.textContent = 'Enter Server Num';
    // botMessageDiv.textContent = 'Enter Send Webcam Server No.';
    chatBox.appendChild(botMessageDiv);

    // Clear input field
    inputField.value = 'http://';

  // //Open new window and display video stream after 2-3 seconds
  //   setTimeout(() => {
  //     //const serverno = "'" + messageDiv.textContent + "/video'";
  //     const newTab = window.open('http://192.168.1.6:8080/video', '_blank');
  //     navigator.mediaDevices.getUserMedia({ video: true })
  //       .then(stream => {
  //         const video = document.createElement('video');
  //         video.srcObject = stream;
  //         video.autoplay = true;
  //         video.controls = true;
  //         newTab.document.body.appendChild(video);
  //       });
  //   }, 2000); // Delay in milliseconds

    
  }

  // Extra part
  else if (inputField.value !== 'I want Current Video of person') {
    // Display user message in chat box
    const chatBox = document.querySelector('.chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = inputField.value;
    chatBox.appendChild(messageDiv);

    // Display bot message in chat box
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('message', 'bot-message');
    botMessageDiv.textContent = 'Ok! Please wait';
    chatBox.appendChild(botMessageDiv);

    // Clear input field
    inputField.value = '';

    // Open new window and display video stream after 2-3 seconds
    setTimeout(() => {
      const serverno = messageDiv.textContent +"/video";
      const newTab = window.open(serverno, '_blank');
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          const video = document.createElement('video');
          video.srcObject = stream;
          video.autoplay = true;
          video.controls = true;
          newTab.document.body.appendChild(video);
        });
    }, 2000); // Delay in milliseconds
  }
// 

else if (inputField.value !== 'I want Live location of the person') {
  // Display user message in chat box
  const chatBox = document.querySelector('.chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.textContent = inputField.value;
  chatBox.appendChild(messageDiv);

  // Display bot message in chat box
  const botMessageDiv = document.createElement('div');
  const url = 'https://192.168.1.6:8080/location';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({latitude, longitude}),
    headers: {'Content-Type': 'application/json'}
  })
  botMessageDiv.classList.add('message', 'bot-message');
  botMessageDiv.textContent = 'Ok! Please wait' + url;
  chatBox.appendChild(botMessageDiv);

}
});
