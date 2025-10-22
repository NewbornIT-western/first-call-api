import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.restful-api.dev/objects";

function CallAPI() {
  const [phones, setPhones] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [phoneDetails, setPhoneDetails] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setPhones(res.data);
    });
  }, []);

  const handleSelect = (e) => {
    setSelectedId(e.target.value);
    setPhoneDetails(null);
  };

  const handleClick = () => {
    if (selectedId) {
      const selected = phones.find((phone) => phone.id === selectedId);
      setPhoneDetails(selected);
    }
  };

  return (
    <div className="phone-container">
      <div className="control-container">
        <select onChange={handleSelect} value={selectedId}>
          <option value="">Chọn điện thoại</option>
          {phones.map((phone) => (
            <option key={phone.id} value={phone.id}>
              {phone.name}
            </option>
          ))}
        </select>
        <button onClick={handleClick} disabled={!selectedId}>
          Xem chi tiết
        </button>
      </div>

      {phoneDetails && (
        <div>
          <h3>Thông tin chi tiết:</h3>
          <p>ID: {phoneDetails.id}</p>
          <p>Tên: {phoneDetails.name}</p>
          {phoneDetails.data && (
            <div>
              <h4>Thông số kỹ thuật:</h4>
              {Object.entries(phoneDetails.data).map(([key, value]) => (
                <p>
                  {key}: {value}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CallAPI;
