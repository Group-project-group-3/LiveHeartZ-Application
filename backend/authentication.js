
const bcrypt = require('bcrypt');

const users = [
  {
    email: 'bloodbank.com',
    passwordHash: 'abc@1234' 
  }
];

const login = async (email, password) => {

  const user = users.find(user => user.email === email);

  
  if (!user) {
    return { success: false, message: 'Invalid credentials' };
  }


  const passwordMatch = await bcrypt.compare(password, user.passwordHash);

  if (!passwordMatch) {
    return { success: false, message: 'Invalid credentials' };
  }

  return { success: true, message: 'Login successful' };
};

module.exports = { login };
