import React from 'react'

const Iframe = (props) => {
    let iframe_ref = null;
    const writeHTML = (frame) => {
        if (!frame) {
            return
        }
        iframe_ref = frame;
        let doc = frame.contentDocument;
        doc.open();
        doc.write(props.content);
        doc.close();
        frame.style.width = '100%';
        frame.style.height = `${frame.contentWindow.document.body.scrollHeight}px`;
    }
    return (
        <div className="iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818575.120748894!2d-105.84730013974398!3d20.82858615162504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x841f40ebd4624e6f%3A0xa0feb0a35a1b4a53!2sJalisco!5e0!3m2!1ses-419!2smx!4v1604290880127!5m2!1ses-419!2smx" width="600" height="450" ref={writeHTML} />
        </div>
    )
}
export default Iframe