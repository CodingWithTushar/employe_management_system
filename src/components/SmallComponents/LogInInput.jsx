export function Input({ type, placeholder = "", OnChange, value , src , alt }) {
  return <>
  <div className="flex gap-5 my-4 ">
    <img src={src} alt={alt} width={90} className="border-2 rounded-full p-1 bg-slate-200 cursor-pointer"  />
  <input
      required
      value={value}
      onChange={OnChange}
      type={type}
      placeholder={placeholder}
      className="rounded py-4 px-5 text-2xl font-semibold outline-none bg-transparent my-3 placeholder:text-slate-300 border-[#aaaaaa] border-2 text-slate-300 p-1 hover:border-white "
    />
  </div>
   
  </>



}
