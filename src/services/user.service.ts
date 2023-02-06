import { UserRepository } from '../repositories';
import AuthServer from '../server/authServer';

export const register = async ({ userId, password, email }) => {
  const user = await UserRepository.register({ userId, password, email });
  return user;
};

export const isExistUser = async ( userId: string  , email: string  ): Promise<boolean> => {
  const userUuid = await UserRepository.isExistUser( userId, email );
  
  return !!userUuid;
};

export const findPasswordAndRoleByUserId = async ( userId ) => {
  const { password, role } = await UserRepository.findOneByUserId( userId );

  return { password, role };
};

export const updatePassword = async ({ userId, email, tempPassword }) => {
  const result = await UserRepository.updatePassword({ tempPassword }, { where: { userId, email } });

  return result;
};

// auth-server에서 토큰받아오기
export const getJwtTokens = async({ userId, role }) => {
  const tokens = await AuthServer.getTokens({ userId, role });

  return tokens;
};
