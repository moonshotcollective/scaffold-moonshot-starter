import * as bcrypt from 'bcrypt';

export async function generateHash(stringToHash: string) {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(stringToHash, salt);
}
export async function compareHash(stringToCompare: string, hash: string) {
  const isMatch = await bcrypt.compare(stringToCompare, hash);
  return isMatch;
}
