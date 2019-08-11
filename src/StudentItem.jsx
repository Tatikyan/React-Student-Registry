import React, { Component } from 'react';


export default class StudentItem extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false};
    this.editStudent = this.editStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent()
  {
    const {id} = this.props.student;
this.props.deleteStudent(id);
  }
  editStudent()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editStudentSubmit()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.editStudentSubmit(this.props.student.id,this.nameInput.value,this.performanceSelect.value,this.birthDayInput.value);
  }

    render() {
        const {name,performance,birthDay} = this.props.student;
      return (
        this.state.isEdit === true ?

        <tr className="bg-warning" key={this.props.index}>
            <td><input ref={nameInput => this.nameInput = nameInput} defaultValue ={name}/></td>
            <td>
                <select name="performance" ref={select => this.performanceSelect = select} defaultValue={performance}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </td>
            <td><input ref={birthDayInput => this.birthDayInput = birthDayInput} defaultValue={birthDay}/></td>
            <td><i className="far fa-save" onClick={this.editStudentSubmit}></i></td><td><i className="fas fa-trash"></i></td>
        </tr>
 :
        <tr key={this.props.index}><td>{name}</td><td>{performance}</td><td>{birthDay}</td><td><i className="far fa-edit" onClick={this.editStudent}></i></td><td><i className="fas fa-trash" onClick={this.deleteStudent}></i></td></tr>
      );
    }
  }