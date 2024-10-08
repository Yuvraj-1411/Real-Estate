import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-3'>
          <p className='text-gray-300'>
            Contact <span className='font-semibold text-white'>{landlord.username}</span> for{' '}
            <span className='font-semibold text-white'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full bg-gray-800 text-gray-200 border border-gray-600 p-3 rounded-lg focus:outline-none'
          ></textarea>

          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className='bg-gray-700 text-white text-center p-3 uppercase rounded-lg hover:bg-gray-600 transition-opacity'
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
