import * as React from 'react';
import './style.css';

export default function App() {
  const [yes, setYes] = React.useState(false);

  const handCh = () => {
    setYes(!yes);
  };

  return (
    <div
      style={{
        backgroundColor: yes ? 'green' : 'blue',
      }}
      onClick={handCh}
    >
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
