export function getUser() {
  //there will be something here sometime
  return 
}

export async function signupUser(email: string, password: string) {
//there will be something here sometime
  return
}

export async function signInUser(email: string, password: string) {
//there will be something here sometime
  return 
}

export async function logout() {
//there will be something here sometime
  return 
}


//ignore everything below this, just placeholder to remind A1's smooth brain based on how we set up user creation

//
//
//

// module.exports = class UserService {
//     static async create({ email, password }) {
//       if (email.length <= 6) {
//         throw new Error('Invalid email');
//       }
  
//       if (password.length < 6) {
//         throw new Error('Password must be at least 6 characters long');
//       }
  
//       const passwordHash = await bcrypt.hash(
//         password,
//         Number(process.env.SALT_ROUNDS)
//       );
  
//       const user = await User.insert({
//         email,
//         passwordHash,
//       });
  
//       return user;
//     }
  
//     static async signIn({ email, password = '' }) {
//       try {
//         const user = await User.getByEmail(email);
  
//         if (!user) throw new Error('Invalid email');
//         if (!bcrypt.compareSync(password, user.passwordHash))
//           throw new Error('Invalid password');
  
//         const token = jwt.sign({ ...user }, process.env.JWT_SECRET, {
//           expiresIn: '1 day',
//         });
  
//         return token;
//       } catch (error) {
//         error.status = 401;
//         throw error;
//       }
//     }
//   };