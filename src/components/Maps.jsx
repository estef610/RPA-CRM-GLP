import React from 'react'

const Maps = () => {
    return (
        <div className="iframe">
            <br /><br />
            <a href='https://goo.gl/maps/hnLBwKn5s6rAL4R58'>Cobertura</a>
            <br /><br />
            <iframe src='https://goo.gl/maps/hnLBwKn5s6rAL4R58' width="600" height="450" ></iframe>
            <br /><br />
            <button
                className="btn btn-warning btn-sm float-right mr-2"
                onClick=<a src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818575.120748894!2d-105.84730013974398!3d20.82858615162504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x841f40ebd4624e6f%3A0xa0feb0a35a1b4a53!2sJalisco!5e0!3m2!1ses-419!2smx!4v1604290880127!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>}
            >
            </button>
        </div>
    )
}

export default Maps