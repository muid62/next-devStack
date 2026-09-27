import { FiX } from "react-icons/fi";
import Image from "next/image";

const YourStack = ({ selectedTechnologies, removeBtn, removeAllBtn }) => {
    return (
        <aside className="rounded-xl border border-base-200 bg-base-100 p-4 shadow-sm h-fit">
            <div>
                <h2 className="text-lg font-bold text-gray-950">Your Stack</h2>
                <p className="text-xs text-gray-400 mt-1">
                {selectedTechnologies.length === 0
                ? "No technologies selected yet."
                : `${selectedTechnologies.length} ${
                selectedTechnologies.length === 1 ? "Technology" : "Technologies"} Selected`}
                </p>
            </div>
            {selectedTechnologies.length === 0 
            ? (
            <div className="flex min-h-20 items-center justify-center rounded-lg border border-dashed border-gray-300 px-4 text-center mt-5">
                <p className="text-xs text-gray-400">Your stack is empty.</p>
                </div>
            ):(
            <div className="space-y-2 mt-4">
                {selectedTechnologies.map((technology) => (
                    <div key={technology.id} className="flex items-center gap-3 rounded-lg border border-gray-200 p-2">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                            <Image src={technology.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-xs font-bold text-gray-800">
                            {technology.name}
                            </h3>
                            <p className="text-[9px] text-gray-400">
                            {technology.category}
                            </p>
                        </div>
                        <button onClick={() => removeBtn(technology.id)}
                            className="btn btn-ghost btn-xs text-gray-400 hover:text-red-500"
                            aria-label={`Remove ${technology.name}`}>
                            <FiX className="text-base" />
                    </button>
                </div>
            ))}
                <button onClick={removeAllBtn}
                    className="btn mt-3 h-8 min-h-8 w-full rounded-lg border border-red-200 bg-transparent text-xs text-red-500 hover:bg-red-50"> Remove All
                </button>
            </div>
        )}
        </aside>
    );
};
export default YourStack;