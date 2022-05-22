import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from 'components/auth/AuthenticationButton';

const Forbidden = () => {
  const { user } = useAuth0();
  return (
    <div
      className="flex items-center justify-center w-screen h-screen  bg-gradient-to-r from-indigo-600 to-blue-400"
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">403</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">
              Oops!<br></br>
            </span>
            Forbidden resource
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            Sorry <strong>{user?.name}</strong>, you do not have access to this app
          </p>
          <AuthenticationButton />
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
