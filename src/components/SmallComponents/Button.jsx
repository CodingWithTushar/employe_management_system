export function Button({ label }) {
  return (
    <button className="text-white font-semibold border-2 p-3  bg-transparent rounded px-[185px] py-4 my-6 text-2xl hover:bg-white hover:text-black">
      {label}
    </button>
  );
}
