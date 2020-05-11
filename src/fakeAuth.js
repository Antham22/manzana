const userDb = [
    {
      name: 'Billy Gates',
      email: 'billy.gates@microsoft.com',
      password: 'windowsPC4eva',
    },
  ];

export default ({email, password}) => {
    return new Promise((resolve) => {
        const user = userDb
            .find(u => u.email === email);
        const validPassword = user && user.password === password;

        if(!user) {
            return resolve({
                valid: false,
                error: "User does not exist."
            })
        }

        if(validPassword) {
            return resolve({
                valid: true,
                name: user.name
            })
        }

        return resolve({
            valid: false, 
            error: "Incorrect password. Please try again."
        })
    });
};