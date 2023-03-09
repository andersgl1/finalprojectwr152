import "../pages/styles/Home.css";

export default function Search() {
    function sendResponse() {
        let resp = String(document.getElementById("location").value);
        alert("" + resp);
    }

    return (
        <div
            className="search"
        >
            <input
                id="location"
                type="text"
                placeholder="Find a location"
            />
            <button
                type="button"
                className="search-button"
                onClick={() => {sendResponse()}}
            >
                {">"}
            </button>
        </div>
    );
}

