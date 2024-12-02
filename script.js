/*if ('Notification' in window) {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }
  }

  
  function showNotification(title, options) {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    }
  }
  
  // Example usage
  showNotification('Hello!', {
    body: 'This is a notification.',
    icon: '/path/to/icon.png' // Optional
  });

  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function(error) {
      console.log('Service Worker registration failed:', error);
    });
  }

  
  self.addEventListener('push', function(event) {
    let options = {
      body: event.data ? event.data.text() : 'Default body',
      icon: '/path/to/icon.png',
      vibrate: [100, 50, 100],
      data: { primaryKey: 1 }
    };
  
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });

  
  navigator.serviceWorker.ready.then(function(registration) {
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: '<Your Public VAPID Key>'
    }).then(function(subscription) {
      // Send subscription to your server to store it and send messages later
      fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscription)
      });
    }).catch(function(error) {
      console.error('Subscription error:', error);
    });
  });

  
  const webpush = require('web-push');

const vapidKeys = {
  publicKey: '<Your Public VAPID Key>',
  privateKey: '<Your Private VAPID Key>'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const pushSubscription = { Retrieved subscription object };
const payload = 'Here is a push notification!';

webpush.sendNotification(pushSubscription, payload).catch(error => {
  console.error('Push Notification error:', error);
});*/

/*document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
  
      document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
          everyitem.addEventListener('mouseover', function(e){
  
              let el_link = this.querySelector('a[data-bs-toggle]');
  
              if(el_link != null){
                  let nextEl = el_link.nextElementSibling;
                  el_link.classList.add('show');
                  nextEl.classList.add('show');
              }
  
          });
          everyitem.addEventListener('mouseleave', function(e){
              let el_link = this.querySelector('a[data-bs-toggle]');
  
              if(el_link != null){
                  let nextEl = el_link.nextElementSibling;
                  el_link.classList.remove('show');
                  nextEl.classList.remove('show');
              }
  
  
          })
      });
  
  }*/
  // end if innerWidth
  //});

/*document.addEventListener("DOMContentLoaded", function() {
  // Set a timeout to hide the loading animation after 2 seconds
  setTimeout(function() {
      // Hide the loading animation
      var loading = document.getElementById('loading');
      loading.style.display = 'none';

      // Show the main content
      var content = document.getElementById('content');
      content.style.display = 'block';
  }, 1000); // 2000 milliseconds = 2 seconds
});*/

/*document.addEventListener("DOMContentLoaded", function() {
  // Set a timeout to hide the loading animation after 2 seconds
  setTimeout(function() {
      // Hide the loading animation
      var loading = document.getElementById('loading');
      loading.style.display = 'none';

      // Show the main content
      var content = document.getElementById('content');
      content.style.display = 'block';
  }, 2000); // 2000 milliseconds = 2 seconds
});*/

document.addEventListener("DOMContentLoaded", function() {
  if (!sessionStorage.getItem('animationDisplayed')) {
      // Set a timeout to hide the loading animation after 2 seconds
      setTimeout(function() {
          // Hide the loading animation
          var loading = document.getElementById('loading');
          loading.style.display = 'none';

          // Show the main content
          var content = document.getElementById('content');
          content.style.display = 'block';

          // Allow scrolling after loading
          document.body.style.overflow = 'auto';

          // Set session storage item to indicate the animation has been displayed
          sessionStorage.setItem('animationDisplayed', 'true');
      }, 2000); // 2000 milliseconds = 2 seconds
  } else {
      // If the animation has already been displayed, hide the loading animation immediately
      var loading = document.getElementById('loading');
      loading.style.display = 'none';

      // Show the main content
      var content = document.getElementById('content');
      content.style.display = 'block';

      // Allow scrolling
      document.body.style.overflow = 'auto';
  }
});



 
