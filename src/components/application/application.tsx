function Application() {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>

        <div>
          <label htmlFor="job-location">Job Location</label>
          <select name="" id="job-location">
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" /> I agree to all terms and
            conditions
          </label>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default Application;
