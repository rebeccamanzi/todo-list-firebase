const admin = require('firebase-admin');
const serviceAccount = require('../ServiceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

async function quickstartListen(db) {
  const snapshot = await db.collection('todo').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}
quickstartListen(db);




