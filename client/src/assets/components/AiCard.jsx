export default function AiCard({ tool }) {
  return (
    <div className="
      bg-[#f3f3f3]
      rounded-3xl
      p-6
      flex flex-col
      shadow-sm
      hover:shadow-md
      transition
    ">

      {/* TOP : ICON + TITLE */}
      <div className="flex items-center gap-4 mb-4">
        <div className="
          w-14 h-14
          rounded-2xl
          bg-black
          flex items-center justify-center
          shrink-0
        ">
          {tool.thumbnail ? (
            <img
              src={tool.thumbnail}
              alt={tool.name}
              className="w-8 h-8 object-contain"
            />
          ) : (
            <span className="text-white text-xl font-bold">
              AI
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            {tool.name}
          </h3>
          <p className="text-sm text-gray-500">
            AI tools
          </p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-700 text-sm leading-relaxed flex-1">
        {tool.description ||
          "No description available for this AI tool."}
      </p>

      {/* BUTTONS */}
      <div className="flex gap-3 mt-6">
        {tool.useLink && (
          <a
            href={tool.useLink}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              text-center
              bg-[#2b2b2b]
              text-white
              py-2.5
              rounded-xl
              text-sm
              font-medium
              hover:bg-black
              transition
            "
          >
            Use me
          </a>
        )}

        {tool.learnLink && (
          <a
            href={tool.learnLink}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              text-center
              bg-[#9a9a9a]
              text-white
              py-2.5
              rounded-xl
              text-sm
              font-medium
              hover:bg-[#7f7f7f]
              transition
            "
          >
            Learn
          </a>
        )}
      </div>
    </div>
  );
}
