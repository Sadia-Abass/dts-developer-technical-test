
import { Link } from 'react-router-dom';

export default function Header({ title }) {
    return (
        <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="container-fuild">
                            <h4 className='text-light'>{title}</h4>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                                    <li className="nav-item ">
                                        <Link className='nav-link text-white fw-bold d-flex fs-4 float-end' to="/task">Task</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                    )
   
}