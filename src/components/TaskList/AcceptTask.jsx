export const AcceptTask = () => {

  return (
    <div>
      <div className="h-full w-full max-w-sm min-h-[310px] bg-red-400 text-white p-4 rounded-xl flex-shrink-0">
        <div className="flex justify-between items-center">
          <h4 className="bg-red-600 font-bold px-4 py-1 rounded text-sm">
            High
          </h4>
          <h4 className="font-medium text-sm">9 July 2025</h4>
        </div>
        <h1 className="text-2xl font-bold mt-5">Learn Javascript</h1>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          voluptates natus non in nulla tempora similique dolores excepturi
          iusto voluptatum! Veritatis incidunt expedita ex eligendi dolore quo
          consequuntur facere recusandae.
        </p>
        <div className="mt-4 flex gap-2">
          <button className="bg-green-600 hover:bg-green-700 text-sm text-white px-4 py-2 rounded">
            Mark as Completed
          </button>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-sm text-white px-4 py-2 rounded">
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
};
