interface LoginModalProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  onSwitchToRegister,
}) => {
  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-[#A79E9E]/75">
      <div className="relative w-[400px] rounded-lg bg-[#FDEDAC] p-8 py-15 shadow-xl">
        <h2 className="mb-6 text-center text-xl font-bold">Welcome back!</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border-b border-zinc-500 bg-transparent p-2 focus:outline-none"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-zinc-500 bg-transparent p-2 focus:outline-none"
            />
          </div>
          <div className="relative text-right">
            <a href="#" className="text-sm text-black hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-orange-400 py-2 font-bold text-white hover:bg-orange-500"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <button
            onClick={onSwitchToRegister}
            className="cursor-pointer font-bold text-black underline"
          >
            Register here
          </button>
        </p>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-xl text-gray-600 hover:text-black"
        >
          ×
        </button>
      </div>
    </div>
  );
};
