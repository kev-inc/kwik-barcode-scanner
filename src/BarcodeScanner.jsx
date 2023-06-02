import { useZxing } from "react-zxing";

export const BarcodeScanner = ({ addResult }) => {
  const { ref } = useZxing({
    onResult(res) {
      addResult(res.getText());
    }
  });

  return (
    <div className="p-4">
      <video ref={ref} className="camera" />
    </div>
  );
};
