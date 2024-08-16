import "./CreateComponent.css"

function CreateComponent() {
    return (
        <div className="create-wrapper">
            <div className="form-wrapper">
                    <h3>Write some text</h3>
                <form>
                    <textarea name="text"></textarea>
                    <button>Publish</button>
                </form>
            </div>
        </div>
    )
}

export default CreateComponent;