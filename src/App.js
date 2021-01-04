
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1> Covid 19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option Two</MenuItem>
          <MenuItem value="worldwide">Option three</MenuItem>
          <MenuItem value="worldwide">EU-2021</MenuItem>
        </Select>
      </FormControl>
      </div>
      

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
