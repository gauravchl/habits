import React, { useState } from 'react';
import { habits as habitModel } from '../../models';
import Layout from '../layout';

export default (props) => {
  const { onGoBack, onSuccess } = props;
  const [name, setName] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    if (!name || !name.trim()) return null;
    await habitModel.add({ name });
    onSuccess && onSuccess();
  };

  return (
    <Layout>
      <div className="mt-2">
        <div className="form-group">
          <h3 className="text-primary font-weight-light text-center my-5">
            Create Your <span className="font-weight-bold">New Habit</span>!
          </h3>
          <input
            type="text"
            className="form-control"
            placeholder="Give Your Habit a Name"
            onChange={handleNameChange}
          />
          <button className="btn btn-primary mt-4 btn-block" onClick={handleSubmit}>
            CREATE!
          </button>
          <button className="btn btn-link-secondary mt-2 btn-block" onClick={onGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </Layout>
  );
};

//#f9807d
