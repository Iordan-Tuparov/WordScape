import "./CreateComponent.css"

function CreateComponent() {
    return (
        <div className="create-wrapper">
            <div className="form-wrapper">
                <form>
                    <textarea name="text" placeholder="Some text..."></textarea>
                    <button>Publish</button>
                </form>
            </div>
        </div>
    )
}

export default CreateComponent;