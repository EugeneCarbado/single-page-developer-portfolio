import React, {useState} from 'react';

const Form = () => {
  const [data, setData] = useState({name: '', email: '', message: ''});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const submit = () => {
    console.log('Thank you! I will be in contact shortly.');
  };

  return (
    <section>
      <h2></h2>
      <div></div>
      <form action="/" method="POST">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleSubmit}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleSubmit}
          />
        </label>
        <label>
          Message
          <input
            type="text"
            name="message"
            value={data.message}
            onChange={handleSubmit}
          />
        </label>
        <button type="submit" onSubmit={submit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
