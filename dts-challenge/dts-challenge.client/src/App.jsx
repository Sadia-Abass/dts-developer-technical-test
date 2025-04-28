import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTask from './pages/AddTask';
import UpdateTask from './pages/UpdateTask';
import TaskDetails from './pages/TaskDetails';
import DeleteTask from './pages/DeleteTask';
import Home from './pages/Home';
import TaskLists from './pages/TaskLists';
import Header from './Header';

function App() {
    //const [forecasts, setForecasts] = useState([]);
    const [title, setTitle] = useState("HM Courts and Tribunals Service");

    useEffect(() => {
        //populateWeatherData();
        setTitle("HM Courts and Tribunals Service");
    }, []);

    //const contents = forecasts === undefined
    //    ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
    //    : <table className="table table-striped" aria-labelledby="tableLabel">
    //        <thead>
    //            <tr>
    //                <th>Date</th>
    //                <th>Temp. (C)</th>
    //                <th>Temp. (F)</th>
    //                <th>Summary</th>
    //            </tr>
    //        </thead>
    //        <tbody>
    //            {forecasts.map(forecast =>
    //                <tr key={forecast.date}>
    //                    <td>{forecast.date}</td>
    //                    <td>{forecast.temperatureC}</td>
    //                    <td>{forecast.temperatureF}</td>
    //                    <td>{forecast.summary}</td>
    //                </tr>
    //            )}
    //        </tbody>
    //    </table>;

    return (
        // <div>
        //     <h1 id="tableLabel">Weather forecast</h1>
        //     <p>This component demonstrates fetching data from the server.</p>
        //     {contents}
        // </div>
        <div className="container-fluid">
            
            <BrowserRouter>

                <Header title={title} />
            <Routes>
                <Route path='/' element={<TaskLists />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/task' element={<TaskLists />}></Route>
                <Route path='/addTask' element={<AddTask />}></Route>
                <Route path='/updateTask/:taskid' element={<UpdateTask />}></Route>
                <Route path='/taskDetails/:id' element={<TaskDetails />}></Route>
                {/* <Route path='/deleteTask/taskid' element={<DeleteTask />}></Route> */}
            </Routes>
            </BrowserRouter>
        </div>
    );
    
    //async function populateWeatherData() {
    //    const response = await fetch('weatherforecast');
    //    if (response.ok) {
    //        const data = await response.json();
    //        setForecasts(data);
    //    }
    //}
}

export default App;