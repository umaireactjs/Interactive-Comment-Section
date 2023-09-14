export function MessageBox({submitComment}: {submitComment: () => void}) {
    return <div className="flex my-3">
        <input
          className="bg-input shadow font-light w-full p-4 focus:outline-none"
          type="text"
          placeholder="Write your comment"
        />
        <button onClick={() => submitComment()} className="bg-input px-6">
          <img src="images/send.svg" className="h-4 w-4" />
        </button>
      </div>;
}