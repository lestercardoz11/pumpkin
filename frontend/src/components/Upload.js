const Upload = () => {
  return (
    <form class='row g-3'>
      <p className='fs-5 fw-bold mb-4'>Upload Image</p>
      <div class='col-md-8'>
        <label for='inputEmail4' class='form-label'>
          Email
        </label>
        <input type='text' class='form-control' id='inputEmail4' />
      </div>
      <div class='col-md-8'>
        <label for='inputEmail4' class='form-label'>
          Email
        </label>
        <input type='file' class='form-control' id='inputEmail4' />
      </div>
      <div class='col-md-8'>
        <label for='inputState' class='form-label'>
          State
        </label>
        <select id='inputState' class='form-select'>
          <option>Technology</option>
          <option>Marketing</option>
          <option>B2B</option>
        </select>
      </div>
      <div class='col-12'>
        <button type='submit' class='btn btn-warning'>
          Upload
        </button>
      </div>
    </form>
  );
};

export default Upload;
