export default function SubmitButton({ contexto }) {
    return(
          <button className="bg-indigo-600 rounded-sm mt-5 py-3 px-2.5 text-[17px] cursor-pointer hover:bg-indigo-500 transition-colors text-white w-[35%]" type="submit">
            {contexto}
          </button>
    )
}