export default function Page() {
    return (
      <div className="flex gap-5 mt-5"> BT7 : <br /> 
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Success
        </button>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
          Warning
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Danger
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Primary
        </button>
      </div>
    )
  }
  