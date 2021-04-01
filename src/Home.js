import React from 'react';

import axios from 'axios';
 
function Home() {
  
    <div>
      Welcome to the Home Page!
    </div>
  ;
}


    useEffect(() => {
      axios.get('/api/hello')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  export default Home;