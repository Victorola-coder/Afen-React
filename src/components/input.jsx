export default function Input(props) {
  const { className, value, onChange, placeholder, name, type, ...prop } =
    props;

  return (
    <input
      {...prop}
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} outline-none w-full placeholder:text-[#959595] border-white border-[3px] min-w-[400px] text-[#959595] text-[20px] leading-[30px] font-medium rounded-[8px]  bg-transparent py-[17px] pl-[20px]  pr-[16px] px-[20px] font-sat`}
    />
  );
}
