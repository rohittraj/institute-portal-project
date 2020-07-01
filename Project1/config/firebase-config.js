  (function () {
    const firebaseConfig = {
        apiKey: "AIzaSyBZynznyVhFj29jyfbp48K9NFbLsvhGz38",
        authDomain: "todolist-24665.firebaseapp.com",
        databaseURL: "https://todolist-24665.firebaseio.com",
        projectId: "todolist-24665",
        storageBucket: "todolist-24665.appspot.com",
        messagingSenderId: "316002936417",
        appId: "1:316002936417:web:9b4814f584a362b916ac20",
        measurementId: "G-LLGNMKJRC2",
    };

    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    //const auth = firebase.auth();
}());
