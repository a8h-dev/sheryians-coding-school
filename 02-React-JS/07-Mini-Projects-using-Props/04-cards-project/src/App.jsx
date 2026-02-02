import React from 'react';
import {Bookmark} from 'lucide-react';

const App = () => {
  return (
    <div className='parent'>

      <div className="card">
        <div className="top">
          <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/1200/external-amazon-an-american-multinational-technology-company-that-focuses-on-e-commerce-logo-color-tal-revivo.jpg" alt="logo" />
          <button>Save <Bookmark /></button>
        </div>

        <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
        </div>

        <div className="bottom">
            <div>
              <div>
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
