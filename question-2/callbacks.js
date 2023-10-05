/*STUDENT NAME - KUSHAL PATEL
STUDENT ID - 101378751
 */

// QUESTION-2 Promises

// Importing the required functions if they exist in the same directory
 

// You can remove this if not needed.


// Create a method resolvedPromise that resolves a message after a timeout of 500ms.
function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved successfully!");
    }, 500);
  });
}

// Create a method rejectedPromise that rejects an error message after a timeout of 500ms.
function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rejected with an error!");
    }, 500);
  });
}

// Call both promises separately and handle the resolved and rejected results.
resolvedPromise()
  .then((result) => {
    console.log("Resolved Promise Result:", result);
  })
  .catch((error) => {
    console.error("Resolved Promise Error:", error);
  });

rejectedPromise()
  .then((result) => {
    console.log("Rejected Promise Result:", result);
  })
  .catch((error) => {
    console.error("Rejected Promise Error:", error);
  });




  /*
  const delayedSuccess= ()=>{
    setTimeout(()=>{
        let success ={'message':'delayed success!'}
    },500)

  }

   const delayedException = ()=> {
    setTimeout(()=>{
        try{
             throw new Error('error:delayed exception!');
        } catch(e){
            console.error(e);
        
        }
    },500)
   }
delayedSuccess()
delayedException()*/
