import React from 'react';

export default class FolderItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      folders: []
    });
    this.openFolder = this.openFolder.bind(this);
  }

  openFolder(folderId) {
    window.location.href = `http://localhost:3000/#home-page?folderId=${folderId}`;
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
      <div key={folder.folderId} onClick={ () => this.openFolder(folder.folderId)}>
        <div className='folders-container'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/2048px-OneDrive_Folder_Icon.svg.png'></img>
          <p>{folder.name}</p>
        </div>
      </div>
    ));
    return (
      <>{allFolders}</>
    );
  }
}
