import React from 'react';

export default class FolderItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      folders: []
    });
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    fetch('/api/folders', {
      headers: {
        'X-Access-Token': token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          folders: data
        });
      })
      .catch(err => console.error('Unexpected error occured', err));
  }

  render() {
    const folders = this.state.folders;
    const allFolders = folders.map(folder => (
      <a href={`#home-page?folderId=${folder.folderId}`} key={folder.folderId}>
        <div className='flex-basis' >
          <div className='folders-container'>
            <img src='/icons/folder-icon.png'></img>
            <p>{folder.name}</p>
          </div>
        </div>
      </a>
    ));
    return (
      <>{allFolders}</>
    );
  }
}
