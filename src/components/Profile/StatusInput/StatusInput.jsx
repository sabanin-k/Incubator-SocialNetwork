import { Component } from "react";
import styles from "./StatusInput.module.css";

class StatusInput extends Component {
    state = {
        value: this.props.status,
        editMode: false,
        status: this.props.getStatus(this.props.userId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.setState({
                status: this.props.getStatus(this.props.userId)
            })
        }
    }

    activateEditMode() {
        this.setState({
            editMode: true,
            value: this.props.status
        })
    }

    deactivateEditMode() {
        this.setState({ editMode: false })
    }

    handleChange(event) {
        event.preventDefault()
        this.deactivateEditMode()
        this.props.updateStatus(this.state.value)
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleOnDoubleClick = () => {
        if (this.props.userId === this.props.authUserId) this.activateEditMode()
    }

    render() {
        return (
            <div className={styles.div}>
                {!!this.state.editMode
                    ? <input className={styles.input}
                            type="text" placeholder="Чего расскажешь?"
                            defaultValue={this.state.value}
                            onBlur={this.handleChange.bind(this)}
                            onChange={this.onChange}
                            autoFocus={true} />
                        // <button type="submit" onClick={this.handleChange.bind(this)}>Отправить</button>
                    : <p className={styles.p} onDoubleClick={this.handleOnDoubleClick}>{this.props.status || 'тут мог быть твой статус'}</p>}
            </div>
        )
    }
}

export default StatusInput;