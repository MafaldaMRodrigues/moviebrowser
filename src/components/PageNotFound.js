import Camera from '../images/camera.png';

const PageNotFound = () => {
    return (
        <div className="container w-50 my-4">
            <div className="row">
                <div className="col-md-6 notfound-text">
                    <h1>404</h1>
                    <p>Sorry! Page Not Found!</p>
                </div>
                <div className="col-md-6">
                    <img src={Camera} className="img-fluid" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;