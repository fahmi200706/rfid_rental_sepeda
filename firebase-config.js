const firebaseConfig = {
  databaseURL: 'https://rental-sepeda-listrik-default-rtdb.firebaseio.com/'
};

let firebaseDb = null;

try {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  firebaseDb = firebase.database();
} catch (error) {
  console.error('Firebase tidak tersedia:', error);
}
