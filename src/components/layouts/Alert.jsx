import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="grid grid-cols-1 w-full md:w-1/2  mr-auto ml-auto gap-8">
        <p className="flex w-full mr-auto ml-auto mb-4 space-x-2">
          {alert.type === "error" && (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              ></path>
            </svg>
          )}
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  );
}

export default Alert;
