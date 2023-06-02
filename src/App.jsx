import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { FaBarcode, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { BarcodeScanner } from "./BarcodeScanner";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

export default function App() {
  const [results, setResults] = useState([]);
  const addToResults = (id) => {
    if (results.length > 0) {
      if (id !== results[0]) {
        setResults((res) => [id, ...res]);
      }
    } else {
      setResults((res) => [id, ...res]);
    }
  };

  const copyToClipboard = (str) => {
    navigator.clipboard.writeText(str);
    toast("Copied to clipboard!");
  };

  const searchOnGoogle = (str) => {
    window.open(
      "https://www.google.com/search?q=" + str,
      "_blank",
      "noreferrer"
    );
  };

  const searchOnLookup = (str) => {
    window.open("https://www.barcodelookup.com/" + str, "_blank", "noreferrer");
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="text-xl font-semibold bg-gray-50 text-gray-700 p-4 mb-4">
        Kwik Barcode Scanner
      </div>
      <BarcodeScanner addResult={addToResults} />
      {results.length > 0 ? (
        <div>
          {results.map((res) => (
            <div className="flex shadow rounded-lg bg-gray-50 p-4 mx-4 my-2">
              <div className="flex-1 text-left text-xl">{res}</div>
              <button
                className="p-2 opacity-50"
                onClick={() => copyToClipboard(res)}
              >
                <MdContentCopy />
              </button>
              <button
                className="p-2 opacity-50"
                onClick={() => searchOnGoogle(res)}
              >
                <FaGoogle />
              </button>
              <button
                className="p-2 opacity-50"
                onClick={() => searchOnLookup(res)}
              >
                <FaBarcode />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-sm font-medium p-4 text-gray-500">
          Place barcode in the middle of the frame to scan. Please keep your
          device steady when scanning to ensure accurate results.
        </div>
      )}
    </div>
  );
}
