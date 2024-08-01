import "./index.css";
export default function Input({ inputName, type, difName, textareainp }) {
  let name = difName
    ? difName.at(0).toUpperCase() + difName.slice(1)
    : inputName.at(0).toUpperCase() + inputName.slice(1);

  if (type === "textarea") {
    return (
      <div className="mb-5">
        <label
          htmlFor={inputName}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {name}:
        </label>
        <textarea
          type={type}
          name={inputName}
          placeholder={name}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
    );
  }

  return (
    <div className="mb-5">
      <label
        htmlFor={inputName}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name}:
      </label>
      <input
        type={type}
        name={inputName}
        placeholder={name}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
    </div>
  );
}
