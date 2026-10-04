export const getUserData = () => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : [];
  }
  return [];
};

export const setUserData = (userData: any) => {
  if (typeof window !== 'undefined') {
    const prevData = getUserData();
    console.log({ prevData });

    const existingUser = prevData?.find(
      (user: any) => user.email === userData.email
    );

    if (existingUser) {
      return {
        ...existingUser,
        error: 'User already exists',
      };
    }
    const updatedData = [...prevData, userData];
    localStorage.setItem('userData', JSON.stringify(updatedData));
    const token = generateToken();
    setToken(token);
    return {
      ...updatedData,
      token,
    };
  }
};

export const setLoggedInUserData = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const userData = getUserData();
  const selectedUser = userData?.find(
    (user: any) => user.email === email && user.password === password
  );

  if (!selectedUser) {
    throw new Error('Invalid email or password');
  }

  const token = generateToken();
  setToken(token);

  return {
    ...selectedUser,
    token,
  };
};

const generateToken = () => {
  // Generate a random token (for demonstration purposes)
  return Math.random().toString(36).substr(2);
};

export const removeUserData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('userData');
  }
};

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token') || null;
  }
  return null;
};

export const setToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    const hasToken = getToken();
    if (!hasToken) {
      return true;
    } else {
      return false;
    }
  }
};
