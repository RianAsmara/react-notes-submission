import React from 'react';
import PropTypes from 'prop-types';

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
    this.onInputBodyHandler = this.onInputBodyHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {

      return {
        title: event.target.value,
      }
    });
  }

  onInputBodyHandler(event) {
    this.setState(() => {

      return {
        body: event.target.innerHTML,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
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
          <div
            className="add-new-page__input__body"
            data-placeholder="Sebenarnya saya adalah ...."
            contentEditable
            onInput={this.onInputBodyHandler}
          />
          <button type="submit">Tambah</button>
        </form>
      </div>
    )
  }
}

NoteForm.propTypes = {
  addNote: PropTypes.func,
};

export default NoteForm;