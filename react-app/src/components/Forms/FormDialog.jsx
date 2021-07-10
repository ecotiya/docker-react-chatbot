import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput';

export default class FormDialog extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: "",
          email: "",
          description: ""
      }

      this.inputName = this.inputName.bind(this);
      this.inputEmail = this.inputEmail.bind(this);
      this.inputDescription = this.inputDescription.bind(this);
  }

  inputName = (event) => {
      this.setState({name: event.target.value})
  }

  inputEmail = (event) => {
      this.setState({email: event.target.value})
  }

  inputDescription = (event) => {
      this.setState({description: event.target.value})
  }

  submitForm = () => {
    let name = this.state.name;
    let email = this.state.email;
    let description = this.state.description;

    // バリデーションチェック

    let payload = {
        text: 'お問い合わせがありました。\n' +
              'お名前：' + name + '\n' +
              'メールアドレス：' + email + '\n' +
              '問い合わせ内容：\n'  + description + '\n'
    }

    let url = "";

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    }).then(() => {
      alert('送信が完了いたしました。連絡いたしますのでお待ちください。')
      this.setState({
        name: "",
        email: "",
        description: ""
      })
      return this.props.handleClose();
    })

  }

  render() {
       return (
         <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">{"お問い合わせフォーム"}</DialogTitle>
          <DialogContent>
              <TextInput
                  label={"お名前(必須)"}
                  multiline={false}
                  rows={1}
                  value={this.state.name}
                  type={"text"}
                  onChange={this.inputName}
              />
              <TextInput
                  label={"メールアドレス(必須)"}
                  multiline={false}
                  rows={1}
                  value={this.state.email}
                  type={"email"}
                  onChange={this.inputEmail}
              />
              <TextInput
                  label={"お問い合わせ内容(必須)"}
                  multiline={true}
                  rows={5}
                  value={this.state.description}
                  type={"text"}
                  onChange={this.inputDescription}
              />
          </DialogContent>
          <DialogActions>
              <Button onClick={this.props.handleClose} color="primary">
                  キャンセル
              </Button>
              <Button onClick={this.submitForm} color="primary" autoFocus>
                  送信する
              </Button>
          </DialogActions>
        </Dialog>
      )
    }
}
