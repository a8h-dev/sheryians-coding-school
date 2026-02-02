import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="parent">
      <Card image="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" user="Arohi Kumari" bio="Creative soul exploring code, design, and ideas, sharing growth, passion, and positive vibes daily here." age={18} />

      <Card image="https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg" user="Abhishek Mahto" bio="Passionate developer building cool web projects, learning daily, sharing creativity, code, and growth with consistency." age={19} />

      <Card image="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" user="Sakshi Kumari" bio="Creative mind with kind heart, spreading positivity, dreams, and beautiful moments through everyday life." age={18} />
    </div>
  );
}

export default App;