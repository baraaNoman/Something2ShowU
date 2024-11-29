import React from 'react'
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';


import '../style/pages/Blogs.scss'
import Nav from '../components/Nav.jsx'
function Blogs() {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      navigate('/'); // Navigate to the landing page on swipe left
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <div className='blogPage'>
      <Nav/>

      <div className="blogs" {...handlers}>
      <h1>no Blogs yet</h1>
      </div>
    </div>
  )
}

export default Blogs