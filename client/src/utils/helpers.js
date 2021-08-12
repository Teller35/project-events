export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("events", 1);
    let db, tx, store;

    request.onupgradeneeded = function (event) {
      const db = request.result;
      db.createObjectStore("meetings", { keyPath: "_id" });
    };
    request.onerror = function (event) {
      console.log("Something went wrong!");
    };

    request.onsuccess = function (event) {
      db = request.result;
      tx = db.transaction(storeName, "readwrite");
      store = tx.objectStore(storeName);
      db.onerror = function (event) {
        console.log("Something went wrong ", event);
      };

      switch (method) {
        case "put":
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("No method assigned!");
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
