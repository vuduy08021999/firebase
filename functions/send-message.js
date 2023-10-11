// Import the required dependencies
const admin = require('firebase-admin'); 

class FirebaseService {
 app;
 constructor() { 
    this.app = admin.initializeApp({
      credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "arito-erp",
        "private_key_id": "751428d341bdda4790674b2d3a647555f5380dd6",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZl1TCGUvEJbNl\n78oB5rpUajfmSMuQtQDTZAqqvOOaDPJIm7rXBHI8idqiADAZEo/n1bl4KWD3JNCB\nK0ph+s2mPKb1UGSDf3v7qBtEghQr0+b3mryClflZDsdV9mieND/zKgXI8Aq/W/7Q\nMyZB/z5BY6AqL/TB83fuYTcgmjUi5tkBsEg47yqOswQBbRSDkM/vimlmvkX33iyC\nbmV01Dgimb0FGhj3TM8sVgl8kbGVwBQHCMeYxXEBsonDMCjTyA223bs+PfAiY61j\na6qO1h96JQea8JR9CoCIzIhguadiwa+nuCTkdPMCgV4wPfjfKMzP3/9DNy/rmgTT\nIRjC/gH1AgMBAAECggEABG/d+7Z53Rp+tn7pHclx0A76eu1W7iEAe1rcQQbwZ0qg\n9C6FhQEkoLGVzpDFUvAZlqeysjE10yXt3RFoVnDFoJwHcbZHFRJpfUFjukSsuwBl\n33jJodcdyzAVW5sg9hMJ1uc7oAypLtKER7T2kbkDLiXn4lgc0L6NFCacTlWOG+o2\nVBdDIe8OWktL/qjlfMkWBTwe659Bqn6ZayO2FzoUx/FpHwa+xCDjKAvexGkciztk\nS8fEGeI8QdgQkZSOfgfbHJ07TupkVQf8yiqe0vm1IMdxvqWvPgnTIGcX5j1Xk58F\nxgmw/lCzoqq2GEy0sTHlzC31sTYQz+Omm6I3iRxjsQKBgQDWlJ6hf7LpISNnJuVc\nQHL7biE3bwvrKnu48We4vxjRwD3sKWFYTaH3VEhz40pHVjJ/BzwNFtnYbMZdy03M\nnVhY5Z2WcdS1bgm4vEtbPLOLVv9EEE5QHKIVWLnmhJyizgTR7xR//28MJCd7JajF\nQ5qEJIIa9beBsLqF5cz72YbkRQKBgQC3PPQCK+hqfJVr+n1sYXZ9wQual8UcZj7e\nBI037KQKQ6NwQQ0fVPeBr41J1tG28AUtiObOxRPnzuvHJO2swam6osHLMnkVdmmY\n9Go9usn2rbxB48Bm06vnUfuJcR+2mXT6g6wxP8uHSaqtdcT32uSWV1yxM4k10zvq\nyryUQ7L58QKBgQC4viv1D2SRop5AaRR/YF2eayrd9xVj2qe6ityqCpzruX+Wm+nb\nhLs1nbLjU4TX9jZzd18UReA4nS4MAsVwrOcrYkVTCZ4AtkRYcITQgGp0ROpxRzil\ncIF7r3AeL35MDOPJevVDXj/VTCtRsxKjA5k8u9HoNDVRyz5LmZXqH1YroQKBgGjL\ngl3PkL99+tLjUmHup56qDiHe1Ms2KpQ9FCq8uuBn6IwlmASoSlkv9mUZZ5zxTnTJ\nS/9LNOQpMi0VkJxxsclclerJNfixXRkuB6jAMAtVN0qTn5DvU+watfnX6aQ7xWwU\nbCFKc/MujV9g8EI0PPFCi2+IottWsHjKc+lzgmNxAoGAf/Gpv113qDGiEsu3QTDY\nQ53X9whFZzHqR6iCTGaBJfLoUL6ftTwHbYnhbPS2pfVNpZ+QDErtNP9qydwmoL8Z\nvH0nVCRe3sdm7/jtaXsPxGwXKzr833C62UutXcv/SsttiL3Ae8jBfmHMz+C/fMV3\n1lsdkLOGXqkF9jR1EEqIygQ=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-lv3i8@arito-erp.iam.gserviceaccount.com",
        "client_id": "107634747306171603178",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lv3i8%40arito-erp.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
      })
    }, serviceAccountPath);
  }
 sendNotification = (message)=>{
    let self = this;
    return new Promise((resolve,reject)=>{
        self.app.messaging().send(message)
        .then((response) => {
          resolve('Successfully sent message:' + response);
        })
        .catch((error) => { 
          reject(error);
        });
    })
  }
}

export function onRequest(context) {
  let firebase = new FirebaseService();
  firebase.sendNotification({
        "notification": {
            "title": "Thông báo test",
            "body": "test 1 2 3 4 4"
        },
        "data": {
            "mes_type": "MESSAGE",
            "mes_icon": "WARNING",
            "mes_control":"{\"controller\": \"idxn_v\", \"folder\":\"Form\", \"memvars\": {\"xtype\": 1, \"id\": 21189}, \"action\":\"VIEW\"}"
        },
        "token": "eYFwkD3FScCgSzNFXC7VV0:APA91bH6tqExhBrYzOEu0CnRKsq6MD1adoO79l_sJq6DnHgviC1SFa_pktcbuK0xKKIL6400siuxqBlRu8HSWcNFP_VhTgeWqZ9mAxagTwLhcXNwcMj9cFmwesEGbobaV4pBfyXJ5Vxb"
  })
  return new Response("Hello, world!")
}
