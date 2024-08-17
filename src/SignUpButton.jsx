export default function SignUpButton({ login }) {
  return (
    <button
      type="submit"
      className="
            px-4 py-2
            bg-blue-500 text-white
            dark:bg-blue-700 dark:text-gray-100
            border border-transparent rounded-md
            shadow-sm hover:bg-blue-600 dark:hover:bg-blue-800
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600
            transition-colors duration-200 ease-in-out
          "
    >
      {login ? "Login" : "Sign Up"}
    </button>
  );
}
