import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      archived: false,
      createdAt: new Date(),
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {

      return {
        title: event.target.value,
      }
    });
  }

  onContentChangeEventHandler(event) {
    this.setState(() => {

      return {
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div>
        <form className='notes-input' onSubmit={this.onSubmitEventHandler}>

          <input type="text" placeholder="Tuliskan judul catatanmu....." maxLength={50} value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          {this.state.title.length > 0 && this.state.title.length <= 50 && (
            <small>
              Sisa judul catatan tinggal
              {' '}
              {50 - this.state.title.length}
              {' '}
              karakter lagi
            </small>
          )}

          <textarea className='notes-textarea' placeholder="Tuliskan judul catatanmu....." value={this.state.body} onChange={this.onContentChangeEventHandler}></textarea>

          <button type="submit">Tambah</button>
        </form>
      </div>
    )
  }
}

export default NoteForm;