import React from "react";

const FormPost = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title of Post:
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="body" className="form-label">
            Full Body of Post Description
          </label>
          <textarea type="text-area" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="date" className="form-label">
            Today's Date
          </label>
          <input type="date" className="form-control" />
        </div>

        <div className="mb-3">
          <label for="userid" className="form-label">
            User ID
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="tags" className="form-label">
            Tags
          </label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormPost;
