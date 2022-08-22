import { useSelector } from 'react-redux'

function App() {

const data = useSelector(state => state.data)

console.log({data})

if(!data) return <div>Loading...</div>

  return (
    <div className="App">
      <h3 className='title'>Covid Data</h3>
      <p><b>Total Samples Tested:</b> {data.totalSamplesTested}</p>
      <p><b>Total Confirmed Cases:</b> {data.totalConfirmedCases}</p>
      <p><b>Total Active Cases:</b> {data.totalActiveCases}</p>
      <p><b>Discharged:</b> {data.discharged}</p>
      <p><b>Deaths:</b> {data.death}</p>
      <p><b>No. Of States:</b> {data.states.length}</p>
      <h3 className='title'>States</h3>
      <section className='table_div'>
      <table >
        <thead className='table-header'>
          <tr>
          <th>State</th>
          <th>Confirmed cases</th>
          <th>Cases on Admission</th>
          <th>Discharged</th>
          <th>Death</th>
          </tr>
        </thead>
        <tbody>
          {data.states.map((state) => 
          <tr>
            <td>{state.state}</td>
            <td>{state.confirmedCases}</td>
            <td>{state.casesOnAdmission}</td>
            <td>{state.discharged}</td>
            <td>{state.death}</td>
          </tr>)}
        </tbody>
      </table>
      </section>
    </div>
  );
}

export default App;
