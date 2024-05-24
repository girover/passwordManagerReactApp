const AddCategory = () => {
    return ( 
        <div className="card rounded-1 shadow mb-3 border-0 mx-auto" style={{maxWidth:'600px'}}>
            <div className="card-header bg-blue-300 fs-4 text-dark">
                <i className="fa fa-icons"></i>
                <span className="px-2">Add New Category</span>
            </div>
            <div className="card-body bg-blue-50">
                <div className="py-2">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="icon" className="form-label">Icon</label>
                            <input type="file" className="form-control" id="icon" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            <i className="fa fa-save"></i>   
                            <span className="px-2">Create</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddCategory;