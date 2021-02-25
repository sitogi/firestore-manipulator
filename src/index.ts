import * as admin from 'firebase-admin';

admin.initializeApp({ credential: admin.credential.applicationDefault() });
export const firestore = admin.firestore();

const main = async () => {
  try {
    const querySnapshot = await firestore
      .collection('test')
      .where('id', '==', 'id')
      .get();

    querySnapshot.docs.forEach(doc => console.log(doc.data()));
  } catch (e) {
    console.log(e);
  }
};

void main();

