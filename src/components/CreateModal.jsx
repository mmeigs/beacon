import React from 'react';


const CreateModal = (props) => {
  const { handleSubmit, handleChange, title, company, postURL, location, url } = props;

  return (
    <div className="createModal" >
      <form onSubmit={handleSubmit}>
        <p>Create a Job Posting</p>
        <div>
          <input id="title" name="title" value={title} type="text" placeholder="Job Title" onChange={e => handleChange(e)}></input>
        </div>
        <div>
          <input
            id="company"
            name="company"
            type="text"
            value={company}
            onChange={e => handleChange(e)}
            placeholder="Company Name"
            required
          />
        </div>
        <div>
          <input
            id="location"
            type="text"
            name="location"
            value={location}
            onChange={e => handleChange(e)}
            placeholder="Location"
            required
          />
        </div>
        <div>
          <input
            id="url"
            name="url"
            type="text"
            value={url}
            onChange={e => handleChange(e)}
            placeholder="Post URL (optional)"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateModal;