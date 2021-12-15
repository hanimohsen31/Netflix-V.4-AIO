export const Inputuser = ({ value, setValue, placeholder, type = "text" }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="input-group mb-3">
      <input
        required
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
