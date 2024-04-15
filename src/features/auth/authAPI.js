
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3005/auth/signup", {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}


export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:3005/auth/check");
      if (response.ok) {
        const data = await response.json();
    console.log('check',data);

        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

  });
}
export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:3005/auth/signin", {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        throw new Error(error); // Throw the error here
      }
    } catch (error) {
      reject(error.message);
    }
  });
}


export function signOut() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:3005/auth/logout");
      if (response.ok) {
        resolve({ data:'success' });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      console.log(error)
      reject( error );
    }
  });
}


export function resetPasswordRequest(email) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:3005/auth/reset-password-request", {
        method: 'POST',
        body: JSON.stringify({email}),
        headers: { 'content-type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

  });
}

export function resetPassword(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:3005/auth/reset-password", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

  });
}