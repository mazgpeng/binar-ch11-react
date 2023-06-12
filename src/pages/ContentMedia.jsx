import ReactPlayer from 'react-player/youtube';
import { Button } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

const csvData = [
  ['firstname', 'lastname', 'email'],
  ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
  ['Raed', 'Labes', 'rl@smthing.co.com'],
  ['Yezzi', 'Min l3b', 'ymin@cocococo.com']
];

const RAR_FILE_URL =
  'https://drive.google.com/file/d/1EBssmJ4vNwOBpyswecTufjkc9276WqPV/view?usp=sharing';

export function ContentMedia() {
  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };
  return (
    <>
      <div className="latar">
        <div className="container">
          <div className="media">
            <h1>Video</h1>
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/NmxFxBiCrL4"
              width="640px"
              height="360px"
              controls={true}
            />
          </div>
          <div className="download">
            <Button
              variant="primary"
              onClick={() => {
                downloadFileAtURL(RAR_FILE_URL);
              }}>
              Download Rar Gdrive
            </Button>
            <div className="download-container">
              <CSVLink data={csvData} filename={'data.csv'}>
                <Button variant="info" className="download-button">
                  Download CSV
                </Button>
              </CSVLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
